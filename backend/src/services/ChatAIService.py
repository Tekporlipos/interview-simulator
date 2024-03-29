import os
from typing import List

from vertexai.generative_models import Content, Part

from src.utils.responseEntity import error_response


def map_to_format(data: List[dict], ) -> List[Content]:
    result = []
    for item in data:
        result.append(Content(role=item["role"], parts=[Part.from_text(item["content"])]))
    return result


class ChatAIService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ChatAIService, cls).__new__(cls)
        return cls._instance

    def chatAI(self, vertexai, GenerativeModel,data, logger):
        try:
            config = {
                "max_output_tokens": 2048,
                "temperature": 0.9,
                "top_p": 1
            }
            vertexai.init(project='citric-dream-412409')
            model = GenerativeModel("gemini-1.0-pro-001")

            # Extracting the history and current message from data
            history: List = data["data"]
            current = history.pop()

            # Starting the chat with the updated history
            chat = model.start_chat(history=map_to_format(history))

            # Sending the current message and getting the response
            message = chat.send_message(current['content'], generation_config=config)

            return {"content": message.text, "role": 'model'}
        except Exception as error:
            return error_response(str(error), status_code=500, logger=logger, logger_type="error")

