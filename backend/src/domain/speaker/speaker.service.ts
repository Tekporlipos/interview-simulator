import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
@Injectable()
export class SpeakerService {
  async speak(word: string, voice: string) {
    const OPENAI_API_KEY = process.env['OPENAI_API_KEY'];
    if (!OPENAI_API_KEY || !word) return null;
    try {
      const response: AxiosResponse<ArrayBuffer> = await axios.post(
        'https://api.openai.com/v1/audio/speech',
        {
          model: 'tts-1',
          input: word,
          voice: voice,
          response_format: 'mp3',
        },
        {
          responseType: 'arraybuffer',
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
