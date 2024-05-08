import json

import vertexai
from flask_socketio import emit
from sqlalchemy.orm.attributes import flag_modified
from vertexai.preview.generative_models import GenerativeModel

from app import socketio, app, db, cache
from src.models.InterviewSection import InterviewSection
from src.models.PanelMember import PanelMember
from src.services.ChatAIService import ChatAIService

chatAIService = ChatAIService()


@socketio.on('connect')
def handle_connect():
    app.logger.info('Client connected')


@socketio.on('disconnect')
def handle_disconnect():
    app.logger.info('Client disconnected')


@socketio.on('message')
def handle_message(data):
    print('Received message:', data)
    socketio.emit('message', data)


@socketio.on('chatAI')
def handle_chat(data):
    cache_key = f'ai_{data}'
    cached_message = cache.get(cache_key)
    if cached_message is None:
        message = chatAIService.chat_ai(db, flag_modified, PanelMember, InterviewSection, vertexai, GenerativeModel,
                                        data, json, app.logger)
        cache.set(cache_key, message, timeout=1000 * 60 * 60)
    else:
        message = cached_message
    app.logger.info("ChatAI received:", data)
    emit('chatAI', message)
