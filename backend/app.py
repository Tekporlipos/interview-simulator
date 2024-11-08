import os
from flask_caching import Cache
from flask import Flask
from flask_mail import Mail
from flask_socketio import SocketIO
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

cache = Cache(config={"CACHE_TYPE": "SimpleCache", "CACHE_DEFAULT_TIMEOUT": 1000*60*60})
cache.init_app(app)


# Add a list of allowed origins for CORS
# allowed_origins = [origin.strip() for origin in os.environ.get('CORS_ORIGIN').split(',')]
CORS(app)

# Create a SocketIO instance with CORS support
socketio = SocketIO(app)

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
