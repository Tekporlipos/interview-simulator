import json

from app import mail
from flask_mail import Message


def logger(logger_type, log=None, message=None):
    from app import app
    if logger_type == "info" and log is not None:
        app.logger.info(message)
    elif logger_type == "warning" and log is not None:
        app.logger.warning(message)
    elif logger_type == "error" and log is not None:
        app.logger.error(message)


def to_kebab_case(string):
    return string.replace(' ', '_').lower()


def send_email(subject, sender, recipients, body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.html = body
    mail.send(msg)


def generate_google_calendar_link(email_message, app_url):
    formatted_date = email_message.date.strftime('%Y%m%dT%H%M%S')
    return f"https://www.google.com/calendar/event?action=TEMPLATE&dates={formatted_date}&text={email_message.position}+Mock+Interview&location={app_url}/interview/{email_message.id}&details=Mock+Interview+with+GenieAIBuilder"


def interview_prompt(index, data, interview_type="technical"):
    json_data = json.loads(data.get("requirement", "{}"))
    requirement = json_data.get("description")
    resume = json_data.get("resume")
    question = json_data.get("questions")

    if index == 0:
        return (
            f"Generate a user-friendly follow-up question to assess the candidate's suitability for the position of "
            f"{data.get('position')} in a mock interview. The question should be relevant to the candidate's "
            f"introduction {', and, if available, their resume (CV),' if len(resume) > 20 else ''} and should be "
            f"assigned to the panel members"
            f"based on their respective fields and the job requirements. Start with a nice gesture and tailor the "
            f"question to assess the candidate's fit for the role. If provided, consider the job requirements "
            f"when formulating the question. Remember to ensure that your response is in only this JSON format, "
            f"[{{'panel_name': '','expertise': '','question': '','type': 'question'}}]. and each response must "
            f"contain a question."
            f"{' Job requirements: {requirement},' if requirement else ''} candidate’s introduction: "
            f"{data.get('introduction')} {' , resume (CV): {resume}' if len(resume) > 20 else ''} and , "
            f"panel members: {data.get('panels')}."
        )
    elif index == 1:
        return (f"Simulate a {interview_type} interview for a {data.get('position')} role, with the Panel member "
                f"details: {data.get('panels')}. Your task is to ask one question at"
                f" a time {' Based on these questions {question} and.' if len(question) > 20 else ''}, related to the "
                f"{'specified requirements ({requirement}) for the role, and include the ' if requirement else ''} "
                f"interviewee's previous answer in your response. Keep the interview conversational, user-friendly, "
                f"and ensure that the interviewee has a clear understanding of the required "
                f"{interview_type.split(' ')[0]} skills and experience for the role. Please ensure that each response "
                f"is in the following JSON string format: {{'panel_name': '', 'expertise': '', 'question': '', "
                f"'type': 'Question'}}. If the interviewee answers incorrectly, provide brief feedback before moving "
                f"on to the next question. The questions should cover a range of {interview_type.split(' ')[0]} "
                f"skills and experience relevant to the {data.get('position')} role, and the interview should "
                f"maintain a conversational and user-friendly tone throughout."
                )
    elif index == 2:
        return (f"Let's simulate a closing interview. Imagine you are {data.get('panels')} as the panel members. "
                f"Please provide real-world interview closing answers based on the role of {data.get('position')} and "
                f"its requirements: {requirement}. One answer at a time, but assign the answer to one of the panel "
                f"members based on their experiences. Make the answers more user-friendly and real-world-like. Before "
                f"you answer the question, you can briefly discuss my question, especially when it is an open-ended "
                f"question. I want the response to fill the JSON object. I am using it for a project, so any text not "
                f"in the JSON cannot be read: "
                f"{{'panel_name': '{data.get('panel_name')}', 'answer': 'Your answer goes here'}}. Remember to assign "
                f"one answer to a panel member at a time, as only one panel member can speak at a time. The "
                f"interviewee's question: {data.get('question')}"
                )

    return ""
