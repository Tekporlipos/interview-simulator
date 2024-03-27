import OpenAI from 'openai';
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;

export class CreateChatAiDto {
  data: ChatCompletionMessageParam[];
}
