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


def send_email(subject, sender, recipients, body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.html = body
    mail.send(msg)


def generate_google_calendar_link(email_message, app_url):
    formatted_date = email_message.date.strftime('%Y%m%dT%H%M%S')
    return f"https://www.google.com/calendar/event?action=TEMPLATE&dates={formatted_date}&text={email_message.position}+Mock+Interview&location={app_url}/interview/{email_message.id}&details=Mock+Interview+with+GenieAIBuilder"
