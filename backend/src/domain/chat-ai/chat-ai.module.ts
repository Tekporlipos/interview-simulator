import { Module } from '@nestjs/common';
import { ChatAiService } from './chat-ai.service';
import { ChatAiGateway } from './chat-ai.gateway';

@Module({
  providers: [ChatAiGateway, ChatAiService],
})
export class ChatAiModule {}
