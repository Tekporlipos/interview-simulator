import json

from flask import request

from app import app, db
from src.models.EmailMessage import EmailMessage
from src.models.PanelMember import PanelMember
from src.services.EmailBookingService import EmailBookingService
from src.utils.httpMethod import HttpMethod

bookService = EmailBookingService()


@app.route('/api/v1/send-email', methods=[HttpMethod.POST])
def create_booking():
    return bookService.create(db, EmailMessage, PanelMember, request.json, json, app.logger)


@app.route('/api/v1/send-email/<note_id>', methods=[HttpMethod.GET])
def get_booking_by_id(note_id):
    return bookService.get_booking_by_id(db, EmailMessage, note_id, app.logger)
