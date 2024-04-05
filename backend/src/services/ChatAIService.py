import copy
import os
import uuid
from typing import List

from vertexai.generative_models import Content, Part

from src.utils.helpers import interview_prompt, to_kebab_case
from src.utils.responseEntity import error_response


def map_to_format(data: List[dict], ) -> List[Content]:
    result = []
    for item in data:
        result.append(Content(role=item["role"], parts=[Part.from_text(item["content"])]))
    return result


def get_history_data(interview_section, json):
    try:
        history_data = json.loads(interview_section.data)
    except Exception:
        history_data = interview_section.data

    return history_data


class ChatAIService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ChatAIService, cls).__new__(cls)
        return cls._instance

    def chat_ai(self, db, flag_modified, panel_member, interview_section_model, vertex_ai, generative_model, data, json,
                logger):
        try:
            with db.session.begin():
                # Configuration for the chat model
                config = {
                    "max_output_tokens": 2048,
                    "temperature": 0.9,
                    "top_p": 1
                }

                # Initialize Vertex AI
                vertex_ai.init(project=os.environ.get('GOOGLE_PROJECT_ID'))

                # Initialize the generative model
                model = generative_model(os.environ.get('GOOGLE_AI_API_MODEL'))

                # Extract necessary data from the input
                data = data["data"]
                prompt_data = data.get("prompt")
                interview_id = data["id"]
                interview_type = data["interview_type"]

                # Retrieve the interview section from the database
                interview_section = interview_section_model.query.filter_by(interview_id=interview_id).first()

                # Check if prompt data exists
                if prompt_data is not None:
                    data_prompt = prompt_data["data"]
                    # Retrieve panel members
                    if data_prompt["panels"] is None:
                        panel = panel_member.query.filter_by(email_message_id=interview_id).all()
                        panel_dicts = [member.to_dict() for member in panel]
                        data_prompt["panels"] = panel_dicts

                    # generate prompt
                    prompt = interview_prompt(prompt_data["index"], data_prompt, interview_type)

                    # If interview section doesn't exist, create a new one
                    if interview_section is None:
                        interview_section = interview_section_model(
                            interview_id=interview_id,
                            data={to_kebab_case(interview_type): [{"content": prompt, "role": "user"}]}
                        )
                        db.session.add(interview_section)
                    else:
                        # If interview section exists, update it with the new prompt
                        temp = get_history_data(interview_section, json)
                        temp[to_kebab_case(interview_type)] = [{"content": prompt, "role": "user"}]
                        interview_section.data = temp

                else:
                    # If prompt data doesn't exist, append data to interview section
                    if interview_section is None or data["message"] is None:
                        raise Exception("No history")
                    else:
                        temp = get_history_data(interview_section, json)
                        temp[to_kebab_case(interview_type)].append(data["message"])
                        interview_section.data = temp

                # Get history from interview section
                history = copy.deepcopy(get_history_data(interview_section, json).get(to_kebab_case(interview_type)))

                # Get the current prompt from history
                current = history.pop()

                # Start chat with the model
                chat = model.start_chat(history=map_to_format(history))

                # Send the current prompt and get the response
                message = chat.send_message(current['content'], generation_config=config)

                # Update interview section with model's response
                temp = get_history_data(interview_section, json)
                temp[to_kebab_case(interview_type)].append({"content": message.text, "role": 'model'})
                interview_section.data = temp

                # Commit changes to the database
                flag_modified(interview_section, "data")

                # Return the message from the model
                return {"message": {"content": message.text, "role": 'model'}}
        except Exception as error:
            # Rollback changes if an error occurs
            db.session.rollback()
            # Return error response
            return error_response(str(error), status_code=500, logger=logger, logger_type="error")

