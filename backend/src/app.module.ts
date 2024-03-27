import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './domain/send-email/message.module';
import { EmailMessage } from './entities/email-message.entity';
import { PanelMember } from './entities/panel-member.entity';
import { UserFeedback } from './entities/user-feedback.entity';
import { ChatAiModule } from './domain/chat-ai/chat-ai.module';
import { SpeakerController } from './domain/speaker/speaker.controller';
import { SpeakerService } from './domain/speaker/speaker.service';
import { FeedbackModule } from './domain/feedback/feedback.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        process.env.POSTGRES_HOST ||
        'ep-long-sun-00055055-pooler.us-east-1.aws.neon.tech',
      port: 5432,
      username: process.env.POSTGRES_USER || 'default',
      password: process.env.POSTGRES_PASSWORD || 'xW9CQcNvfX2p',
      database: process.env.POSTGRES_DATABASE || 'verceldb',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
      ssl: true,
    }),
    MessageModule,
    TypeOrmModule.forFeature([EmailMessage, PanelMember, UserFeedback]),
    ChatAiModule,
    FeedbackModule,
  ],
  controllers: [SpeakerController],
  providers: [SpeakerService],
})
export class AppModule {}
