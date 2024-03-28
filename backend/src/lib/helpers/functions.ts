import {IInterviewItem, IMessage} from "./RequestExtractor";
import {Content} from "@google/generative-ai";

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function mapInterviewData(data: IInterviewItem[]): Content[] {
  return data.map(item => {
    return {role:item.role,parts:[{text:item.content}]}
  }).filter(Boolean);
}
