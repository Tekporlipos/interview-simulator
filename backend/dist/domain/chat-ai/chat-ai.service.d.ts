import { Socket } from 'socket.io';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AssistantMessage, IInterviewItem } from "../../lib/helpers/RequestExtractor";
export declare class ChatAiService {
    genAI: GoogleGenerativeAI;
    create(body: IInterviewItem[], client: Socket): Promise<AssistantMessage>;
}
