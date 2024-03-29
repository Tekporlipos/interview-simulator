import os

from flask import Flask
from flask_mail import Mail

from instance.dbconfig import DbConfig
from migration.Base import db
from dotenv import load_dotenv
from instance.logger import setup_logging
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
app.config.from_object(DbConfig)
db.init_app(app)
setup_logging(app)
CORS(app)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = os.environ.get('MAIL_HOST')
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')

mail = Mail(app)

import routes.api

with app.app_context():
    import src.models.EmailMessage
    import src.models.PanelMember
    import src.models.InterviewSection
    import src.models.UserFeedback
    db.create_all()

if __name__ == '__main__':
    app.run()
