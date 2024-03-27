import { EmailRequestDTO } from './dto/create-chat.dto';
import { Repository } from 'typeorm';
import { EmailMessage } from '../../entities/email-message.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { PanelMember } from '../../entities/panel-member.entity';
export declare class MessageService {
    private readonly emailRepository;
    private readonly panelMemberRepository;
    private mailerService;
    constructor(emailRepository: Repository<EmailMessage>, panelMemberRepository: Repository<PanelMember>, mailerService: MailerService);
    sendEmail(emailRequestDTO: EmailRequestDTO): Promise<EmailMessage>;
    findOne(id: string): Promise<EmailMessage>;
    processEmail(messageClient: EmailMessage): Promise<void>;
    generateGoogleCalendarLink(emailRequest: EmailMessage, url: string): string;
    calculateNewDate(originalDate: Date): Date;
    getMessage(candidateName: string, jobTitle: string, companyName: string, meetingLink: string, date: string, calender: string): string;
}
