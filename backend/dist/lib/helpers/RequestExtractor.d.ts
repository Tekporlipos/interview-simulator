import { EmailRequestDTO } from '../../domain/send-email/dto/create-chat.dto';
export declare function requestExtractor(req: Request): string;
export declare function mapToEmailRequest(data: any): EmailRequestDTO;
export interface AssistantMessage {
    message: MessageContent;
}
interface MessageContent {
    role: string;
    content: string;
}
export interface IInterviewItem {
    role: "function" | "user" | "model";
    content: string;
}
interface MessagePart {
    text: string;
}
export interface IMessage {
    role: string;
    parts: MessagePart[];
}
export {};
