import OpenAI from 'openai';
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;
export declare class CreateChatAiDto {
    data: ChatCompletionMessageParam[];
}
