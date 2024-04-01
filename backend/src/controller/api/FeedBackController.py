import json

from flask import request

from app import app, db
from src.models.EmailMessage import EmailMessage
from src.models.PanelMember import PanelMember
from src.models.UserFeedback import UserFeedback
from src.services.EmailBookingService import EmailBookingService
from src.services.FeedBackService import FeedBackService
from src.utils.httpMethod import HttpMethod

feedbackService = FeedBackService()


@app.route('/api/v1/feedback', methods=[HttpMethod.POST])
def create_feedback():
    return feedbackService.create_feedback(db, UserFeedback, request.json, app.logger)
