import { EmailRequestDTO } from '../../domain/send-email/dto/create-chat.dto';

export function requestExtractor(req: Request) {
  const strings = req.url.split('/');
  return strings.length > 0 ? strings[strings.length - 1] : null;
}

export function mapToEmailRequest(data: any): EmailRequestDTO {
  return {
    full_name: data.full_name,
    recipient: data.recipient,
    interview_id: data.interview_id,
    description: data.description,
    position: data.position,
    date: data.date,
    panel_members: data.panel_members,
  };
}

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