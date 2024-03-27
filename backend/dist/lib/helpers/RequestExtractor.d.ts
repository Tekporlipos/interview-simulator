import { EmailRequestDTO } from '../../domain/send-email/dto/create-chat.dto';
export declare function requestExtractor(req: Request): string;
export declare function mapToEmailRequest(data: any): EmailRequestDTO;
