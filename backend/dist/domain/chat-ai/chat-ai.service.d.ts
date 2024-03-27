import { Socket } from 'socket.io';
import OpenAI from 'openai';
import { Chat } from 'openai/resources';
import ChatCompletionMessageParam = Chat.ChatCompletionMessageParam;
export declare class ChatAiService {
    openai: OpenAI;
    create(body: ChatCompletionMessageParam[], client: Socket): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice>;
}
