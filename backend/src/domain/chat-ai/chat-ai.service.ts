import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import OpenAI from 'openai';
import { Chat } from 'openai/resources';
import ChatCompletionMessageParam = Chat.ChatCompletionMessageParam;

@Injectable()
export class ChatAiService {
  openai: OpenAI = new OpenAI();
  async create(body: ChatCompletionMessageParam[], client: Socket) {
    const completion = await this.openai.chat.completions.create({
      messages: body,
      model: 'gpt-3.5-turbo',
    });
    client.emit('chatAI', completion.choices[0]);
    return completion.choices[0];
  }
}
