import OpenAI from "openai";
import ChatCompletionMessageParam = OpenAI.Chat.Completions.ChatCompletionMessageParam;

const openai: OpenAI = new OpenAI();

export class RestApiClient {
  async sendMessage(body: ChatCompletionMessageParam[]): Promise<any> {
    const completion = await openai.chat.completions.create({
      messages: body,
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  }
}
