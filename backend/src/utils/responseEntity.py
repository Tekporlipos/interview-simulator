from flask import Response


def success_response(message=None, data=None, status_code=200, logger=None, logger_type=None):
    response = {
        'success': True,
        'message': message,
        'data': data
    }

    if logger is not None and logger_type is not None:
        from src.utils.helpers import logger
        logger(logger_type, logger, message + " " + str(status_code))
    return response, status_code


def error_response(message=None, data=None, status_code=404, logger=None, logger_type=None):
    response = {
        'success': False,
        'message': message,
        'data': data
    }
    if logger is not None and logger_type is not None:
        from src.utils.helpers import logger
        logger(logger_type, logger, message + " " + str(status_code))
    return response, status_code


def get_response_type_entity(audio_data):
    # Create a Flask Response object with the audio data and appropriate headers
    response = Response(audio_data, status=200)
    response.headers['Content-Type'] = 'audio/mp3'
    response.headers['access-control-allow-origin'] = '*'  # Use '*' as default if APP_URL is not defined
    response.headers['access-control-allow-methods'] = 'GET, POST, PUT, PATCH, DELETE'
    response.headers['access-control-allow-headers'] = 'Content-Type, Authorization'
    response.headers['access-control-allow-credentials'] = 'true'
    response.headers['access-control-expose-headers'] = 'X-Custom-Header, Another-Header'
    response.headers[
        'content-security-policy'] = "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src data: https:"
    response.headers['x-content-type-options'] = 'nosniff'
    response.headers['x-frame-options'] = 'SAMEORIGIN'
    response.headers['x-xss-protection'] = '1; mode=block'
    response.headers['strict-transport-security'] = 'max-age=31536000; includeSubDomains; preload'
    response.headers['referrer-policy'] = 'strict-origin-when-cross-origin'

    return response
