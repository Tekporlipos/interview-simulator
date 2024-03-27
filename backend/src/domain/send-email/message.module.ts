import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailMessage } from '../../entities/email-message.entity';
import { PanelMember } from '../../entities/panel-member.entity';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'genieaibuilder@gmail.com',
          pass: 'djuvgzznjbmipokw',
        },
      },
    }),
    TypeOrmModule.forFeature([EmailMessage, PanelMember]),
  ],
})
export class MessageModule {}
