export interface IChatResponse {
  choices: Choice[];
}
interface Choice {
  index: number;
  message: Message;
  finish_reason: string;
}

interface Message {
  role: string;
  content: string;
}

export interface IRequestBodyDto {
  data: [
    {
      role: string;
      content: string;
    },
  ];
}
