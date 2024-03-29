import vertexai
from flask_socketio import emit
from vertexai.generative_models import Content, Part
from vertexai.preview.generative_models import GenerativeModel

from app import socketio, app
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
    message = chatAIService.chatAI(vertexai, GenerativeModel, data, app.logger)
    app.logger.info("ChatAI received:", data)
    emit('chatAI', message)
