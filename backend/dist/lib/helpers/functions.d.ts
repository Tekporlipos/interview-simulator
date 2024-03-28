import { IInterviewItem } from "./RequestExtractor";
import { Content } from "@google/generative-ai";
export declare function generateUUID(): string;
export declare function mapInterviewData(data: IInterviewItem[]): Content[];
