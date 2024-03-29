import os
import asyncio
import uuid
from datetime import datetime

from src.utils.helpers import send_email, generate_google_calendar_link
from src.utils.responseEntity import error_response, success_response


class EmailBookingService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(EmailBookingService, cls).__new__(cls)
        return cls._instance

    def create(self, db, email_message, panel_member, data, json, logger=None):
        try:
            # Create EmailMessage entity
            email_message_entity = email_message(
                date=data.get('date', datetime.now()),
                description=data.get('description', ''),
                full_name=data.get('full_name'),
                interview_id=data.get('interview_id'),
                position=data.get('position'),
                recipient=data.get('recipient', None)
            )
            # Save EmailMessage entity
            db.session.add(email_message_entity)
            db.session.commit()

            # Create PanelMember entities
            panel_members = []
            for panel_member_data in data.get('panel_members', []):
                panel_id = str(uuid.uuid4())
                panel = panel_member(
                    id=panel_id,
                    email=panel_member_data.get('email', None),
                    description=panel_member_data.get('description', None),
                    expertise=panel_member_data.get('expertise', None),
                    name=panel_member_data.get('name'),
                    profile=panel_member_data.get('profile'),
                    email_message_id=email_message_entity.id  # Link to EmailMessage
                )
                panel_members.append(panel)

            # Save PanelMember entities
            db.session.add_all(panel_members)
            db.session.commit()

            # Process email if recipient exists
            if email_message_entity.recipient:
                self.process_email(email_message_entity)

            email_message_dict = email_message_entity.to_dict()
            # Return success response
            return success_response("Mock interview booked successfully", email_message_dict,
                                    status_code=201, logger=logger, logger_type="info")
        except Exception as e:
            db.session.rollback()
            return error_response(str(e), status_code=500, logger=logger, logger_type="error")

    def process_email(self, email_message):
        try:
            app_url = os.environ.get('APP_URL')
            mail_username = os.environ.get('MAIL_USERNAME')

            # Prepare email content
            subject = f'Mock Interview Scheduling with GenieAIBuilder for the role of {email_message.position}'
            link = app_url+"/interview/"+email_message.id
            html_content = self.get_email_content(email_message, link)

            # Send email asynchronously
            send_email(subject, mail_username, [email_message.recipient], html_content)

        except Exception as e:
            print(e)
            raise e

    def get_email_content(self, email_message, app_url):
        formatted_date = email_message.date.strftime('%A, %B %d, %Y at %I:%M %p')
        calendar_link = generate_google_calendar_link(email_message, app_url)

        return f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Online Interview Invitation</title>
            <style>
                /* CSS styles for the email template */
                body {{
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }}
                .container {{
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }}
                .header {{
                    background-color: #dc3545;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                }}
                .event-info {{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #f7f7f7;
                    padding: 2em;
                    border: solid 2px #808080FF;
                }}
                .event-info-left{{
                    flex: 1;
                    border-right: solid 2px #808080FF;
                }}
                .event-info-center {{
                    flex: 4;
                    border-right: solid 2px #808080FF;
                }}
                .event-info-right {{
                    flex: 2;
                }}
                .event-info p {{
                    margin: 0;
                }}
                .content {{
                    padding: 20px;
                }}
                .button {{
                    display: inline-block;
                    background-color: #007BFF;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 3px;
                }}
                .button:hover {{
                    background-color: #0056b3;
                }}
                .meeting-link {{
                    color: #007BFF;
                }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Online Mock Interview Invitation</h2>
                </div>

                <div class="content">
                    <p>Hello {email_message.full_name},</p>
                    <p>When <b>{formatted_date}</b></p>
                    <p>We are pleased to invite you to an online Mock interview for the position of 
                    {email_message.position} at GenieAIBuilder.</p>
                    <p>Here are some interview tips to help you prepare:</p>
                    <ul>
                        <li>Research our company and the role you're applying for.</li>
                        <li>Review your resume and be ready to discuss your experiences.</li>
                        <li>Prepare answers to common interview questions.</li>
                        <li>Dress professionally, even for a virtual interview.</li>
                        <li>Test your audio and video settings in advance.</li>
                    </ul>
                    <p>Please join the online meeting using the following link:</p>
                    <p><a href="{app_url}" class="meeting-link btn-primary" target="_blank">Join Online Meeting</a></p>
                    <p><a href="{calendar_link}" class="meeting-link btn-primary" target="_blank">Add 
                    calendar</a></p> <p>We have added an invitation link to this email. Please use it to add the 
                    interview to your calendar to ensure you don't miss the interview:</p> <p>We look forward to 
                    meeting you virtually! If you have any questions or need any assistance, please feel free to 
                    contact us.</p> <p>Best regards, <br>John Dzikunu <br>GenieAIBuilder</p> </div> </div> </body> 
                    </html>"""
