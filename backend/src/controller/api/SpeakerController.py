from flask import request

from app import app
from src.services.SpeakerService import SpeakerService
from src.utils.httpMethod import HttpMethod
from src.utils.responseEntity import get_response_type_entity
from google.cloud import texttospeech

speakerService = SpeakerService()


@app.route('/api/v1/speaker', methods=[HttpMethod.GET])
def speaker():
    word = request.args.get('word', '')
    voice = request.args.get('voice', '')
    buffer = speakerService.speak(word, voice, texttospeech, app.logger)
    return get_response_type_entity(buffer)
