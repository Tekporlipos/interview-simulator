import { RestApiClient } from "@/app/api/v1/chat/RestApiClient";
import OpenAI from "openai";
import { ResponseEntity } from "@/lib/helpers/ResponseEntity";
import ChatCompletionMessageParam = OpenAI.Chat.Completions.ChatCompletionMessageParam;

const restApiClient: RestApiClient = new RestApiClient();
export async function POST(req: Request) {
  let iChatResponse = await restApiClient.sendMessage(
    (await req.json()).data as ChatCompletionMessageParam[],
  );
  return ResponseEntity(JSON.stringify(iChatResponse));
}
