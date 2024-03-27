import { MessageService } from './message.service';
import { EmailRequestDTO } from './dto/create-chat.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: EmailRequestDTO): Promise<import("../../entities/email-message.entity").EmailMessage | Response>;
    findOne(id: string): Promise<import("../../entities/email-message.entity").EmailMessage>;
}
