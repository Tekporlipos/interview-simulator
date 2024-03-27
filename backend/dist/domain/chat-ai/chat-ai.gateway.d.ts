import { Socket } from 'socket.io';
import { ChatAiService } from './chat-ai.service';
import { CreateChatAiDto } from './dto/create-chat-ai.dto';
export declare class ChatAiGateway {
    private readonly chatAiService;
    constructor(chatAiService: ChatAiService);
    create(createChatAiDto: CreateChatAiDto, client: Socket): Promise<import("openai/resources").ChatCompletion.Choice>;
}
