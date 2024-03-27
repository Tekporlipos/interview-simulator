import { Injectable } from '@nestjs/common';
import { EmailRequestDTO } from './dto/create-chat.dto';
import { Repository } from 'typeorm';
import { EmailMessage } from '../../entities/email-message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { PanelMember } from '../../entities/panel-member.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(EmailMessage)
    private readonly emailRepository: Repository<EmailMessage>,
    @InjectRepository(PanelMember)
    private readonly panelMemberRepository: Repository<PanelMember>,
    private mailerService: MailerService,
  ) {}

  async sendEmail(emailRequestDTO: EmailRequestDTO) {
    try {
      // Create EmailMessage entity
      const emailMessage = new EmailMessage();
      emailMessage.date = emailRequestDTO.date;
      emailMessage.description = emailRequestDTO.description;
      emailMessage.full_name = emailRequestDTO.full_name;
      emailMessage.interview_id = emailRequestDTO.interview_id;
      emailMessage.position = emailRequestDTO.position;
      emailMessage.recipient = emailRequestDTO.recipient;

      // Save EmailMessage entity
      const savedEmailMessage = await this.emailRepository.save(emailMessage);

      // Create PanelMember entities
      const panelMembers = emailRequestDTO.panel_members.map(
        (panelMemberData) => {
          const panelMember = new PanelMember();
          panelMember.email = panelMemberData.email;
          panelMember.description = panelMemberData.description;
          panelMember.expertise = panelMemberData.expertise;
          panelMember.name = panelMemberData.name;
          panelMember.profile = panelMemberData.profile;
          return panelMember;
        },
      );
      // Save PanelMember entities
      emailMessage.panelMembers = await this.panelMemberRepository.save(
        panelMembers,
      );

      // Process email if recipient exists
      if (savedEmailMessage.recipient) {
        this.processEmail(savedEmailMessage);
      }

      return await this.emailRepository.save(emailMessage);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    return await this.emailRepository.findOne({
      where: { id },
      relations: {
        panelMembers: true,
      },
    });
  }

  async processEmail(messageClient: EmailMessage) {
    const url = process.env['APP_URL'] ?? 'http://localhost:3000';
    await this.mailerService.sendMail({
      from: `"Genie Ai Builder" <${process.env['MAIL_USERNAME']}>`,
      to: messageClient.recipient,
      subject:
        'Mock Interview Scheduling with GenieAIBuilder for the role of ' +
        messageClient.position,
      html: this.getMessage(
        messageClient.full_name,
        messageClient.position,
        'GenieAiBuilder',
        `${url}/interview/${messageClient.id}`,
        messageClient.date.toISOString(),
        this.generateGoogleCalendarLink(messageClient, url),
      ),
    });
  }

  generateGoogleCalendarLink(emailRequest: EmailMessage, url: string): string {
    const formattedDate = (date: Date) => {
      const pad = (n: number) => (n < 10 ? '0' + n : n);
      return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
        date.getDate(),
      )}T${pad(date.getHours())}${pad(date.getMinutes())}`;
    };

    return `https://www.google.com/calendar/event?action=TEMPLATE&dates=${formattedDate(
      emailRequest.date,
    )}/${formattedDate(
      this.calculateNewDate(emailRequest.date),
    )}&text=${encodeURIComponent(
      `${emailRequest.position} Mock Interview`,
    )}&location=${url}/interview/${
      emailRequest.id
    }&details=${encodeURIComponent(
      emailRequest.description != null
        ? emailRequest.description.substring(
            0,
            Math.min(500, emailRequest.description.length),
          )
        : '',
    )}`;
  }
  calculateNewDate(originalDate: Date): Date {
    const newDate = new Date(originalDate.getTime());
    newDate.setMinutes(newDate.getMinutes() + 30);
    return newDate;
  }

  getMessage(
    candidateName: string,
    jobTitle: string,
    companyName: string,
    meetingLink: string,
    date: string,
    calender: string,
  ): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Online Interview Invitation</title>
        <style>
            /* CSS styles for the email template */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #dc3545;
                color: #fff;
                padding: 10px;
                text-align: center;
            }
            .event-info {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                background-color: #f7f7f7;
                padding: 2em;
                border: solid 2px #808080FF;
            }
            .event-info-left{
                flex: 1;
                border-right: solid 2px #808080FF;
            }
            .event-info-center {
                flex: 4;
                border-right: solid 2px #808080FF;
            }
            .event-info-right {
                flex: 2;
            }
            .event-info p {
                margin: 0;
            }
            .content {
                padding: 20px;
            }
            .button {
                display: inline-block;
                background-color: #007BFF;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 3px;
            }
            .button:hover {
                background-color: #0056b3;
            }
            .meeting-link {
                color: #007BFF;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Online Mock Interview Invitation</h2>
            </div>
    
            <div class="content">
                <p>Hello ${candidateName},</p>
                <p>When <b>${date}</b></p>
                <p>We are pleased to invite you to an online Mock interview for the position of ${jobTitle} at ${companyName}.</p>
                <p>Here are some interview tips to help you prepare:</p>
                <ul>
                    <li>Research our company and the role you're applying for.</li>
                    <li>Review your resume and be ready to discuss your experiences.</li>
                    <li>Prepare answers to common interview questions.</li>
                    <li>Dress professionally, even for a virtual interview.</li>
                    <li>Test your audio and video settings in advance.</li>
                </ul>
                <p>Please join the online meeting using the following link:</p>
                <p><a href="${meetingLink}" class="meeting-link btn-primary" target="_blank">Join Online Meeting</a></p>
                <p><a href="${calender}" class="meeting-link btn-primary" target="_blank">Add calendar</a></p>
                <p>We have added an invitation link to this email. Please use it to add the interview to your calendar to ensure you don't miss the interview:</p>
                <p>We look forward to meeting you virtually! If you have any questions or need any assistance, please feel free to contact us.</p>
                <p>Best regards,
                    <br>John Dzikunu
                    <br>GenieAIBuilder</p>
            </div>
        </div>
    </body>
    </html>
  `;
  }
}
