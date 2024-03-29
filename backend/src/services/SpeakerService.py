import os

from src.utils.responseEntity import error_response


class SpeakerService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(SpeakerService, cls).__new__(cls)
        return cls._instance

    def speak(self, word: str, voice: str, textToSpeech, logger):
        try:
            client = textToSpeech.TextToSpeechClient()
            input_text = textToSpeech.SynthesisInput(text=word)

            # Note: the voice can also be specified by name.
            # Names of voices can be retrieved with client.list_voices().
            voice = textToSpeech.VoiceSelectionParams(
                language_code="en-US",
                name=voice,
            )

            audio_config = textToSpeech.AudioConfig(
                audio_encoding=textToSpeech.AudioEncoding.LINEAR16,
                speaking_rate=1
            )

            response = client.synthesize_speech(
                request={"input": input_text, "voice": voice, "audio_config": audio_config}
            )
            return response.audio_content
        except Exception as error:
            return error_response(str(error), status_code=500, logger=logger, logger_type="error")
