from flask import request

from app import app, cache
from src.services.SpeakerService import SpeakerService
from src.utils.httpMethod import HttpMethod
from src.utils.responseEntity import get_response_type_entity
from google.cloud import texttospeech

speakerService = SpeakerService()


@app.route('/api/v1/speaker', methods=[HttpMethod.GET])
def speaker():
    word = request.args.get('word', '')
    voice = request.args.get('voice', '')
    cache_key = f'speaker_{word}_{voice}'
    buffer = cache.get(cache_key)
    if buffer is None:
        buffer = speakerService.speak(word, voice, texttospeech, app.logger)
        cache.set(cache_key, buffer, timeout=1000 * 60 * 60 * 24 * 31)
    return get_response_type_entity(buffer)
