import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {AssistantMessage, IInterviewItem} from "../../lib/helpers/RequestExtractor";
import {mapInterviewData} from "../../lib/helpers/functions";

@Injectable()
export class ChatAiService {
  genAI:GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GOOGLEAI_API_KEY);
  async create(body: IInterviewItem[], client: Socket):Promise<AssistantMessage> {
    const model = this.genAI.getGenerativeModel({
      model: process.env.GOOGLEAI_API_MODEL,
    });
    const currentMessage:IInterviewItem = body.pop()
    const chat = model.startChat({
      history:mapInterviewData(body),
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
    const result = await chat.sendMessage(currentMessage.content);
    const text:AssistantMessage ={message:{content: result?.response?.text(),role:'model'}};
    client.emit('chatAI', text);
    return text;
  }
}
