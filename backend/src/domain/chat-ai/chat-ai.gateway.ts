import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatAiService } from './chat-ai.service';
import { CreateChatAiDto } from './dto/create-chat-ai.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatAiGateway {
  constructor(private readonly chatAiService: ChatAiService) {}

  @SubscribeMessage('chatAI')
  create(
    @MessageBody() createChatAiDto: CreateChatAiDto,
    @ConnectedSocket() client: Socket,
  ) {
    return this.chatAiService.create(createChatAiDto.data, client);
  }
}
