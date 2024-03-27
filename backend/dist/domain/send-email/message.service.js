"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const email_message_entity_1 = require("../../entities/email-message.entity");
const typeorm_2 = require("@nestjs/typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const panel_member_entity_1 = require("../../entities/panel-member.entity");
let MessageService = exports.MessageService = class MessageService {
    constructor(emailRepository, panelMemberRepository, mailerService) {
        this.emailRepository = emailRepository;
        this.panelMemberRepository = panelMemberRepository;
        this.mailerService = mailerService;
    }
    async sendEmail(emailRequestDTO) {
        try {
            const emailMessage = new email_message_entity_1.EmailMessage();
            emailMessage.date = emailRequestDTO.date;
            emailMessage.description = emailRequestDTO.description;
            emailMessage.full_name = emailRequestDTO.full_name;
            emailMessage.interview_id = emailRequestDTO.interview_id;
            emailMessage.position = emailRequestDTO.position;
            emailMessage.recipient = emailRequestDTO.recipient;
            const savedEmailMessage = await this.emailRepository.save(emailMessage);
            const panelMembers = emailRequestDTO.panel_members.map((panelMemberData) => {
                const panelMember = new panel_member_entity_1.PanelMember();
                panelMember.email = panelMemberData.email;
                panelMember.description = panelMemberData.description;
                panelMember.expertise = panelMemberData.expertise;
                panelMember.name = panelMemberData.name;
                panelMember.profile = panelMemberData.profile;
                return panelMember;
            });
            emailMessage.panelMembers = await this.panelMemberRepository.save(panelMembers);
            if (savedEmailMessage.recipient) {
                this.processEmail(savedEmailMessage);
            }
            return await this.emailRepository.save(emailMessage);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOne(id) {
        return await this.emailRepository.findOne({
            where: { id },
            relations: {
                panelMembers: true,
            },
        });
    }
    async processEmail(messageClient) {
        const url = process.env['APP_URL'] ?? 'http://localhost:3000';
        await this.mailerService.sendMail({
            from: `"Genie Ai Builder" <${process.env['MAIL_USERNAME']}>`,
            to: messageClient.recipient,
            subject: 'Mock Interview Scheduling with GenieAIBuilder for the role of ' +
                messageClient.position,
            html: this.getMessage(messageClient.full_name, messageClient.position, 'GenieAiBuilder', `${url}/interview/${messageClient.id}`, messageClient.date.toISOString(), this.generateGoogleCalendarLink(messageClient, url)),
        });
    }
    generateGoogleCalendarLink(emailRequest, url) {
        const formattedDate = (date) => {
            const pad = (n) => (n < 10 ? '0' + n : n);
            return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}`;
        };
        return `https://www.google.com/calendar/event?action=TEMPLATE&dates=${formattedDate(emailRequest.date)}/${formattedDate(this.calculateNewDate(emailRequest.date))}&text=${encodeURIComponent(`${emailRequest.position} Mock Interview`)}&location=${url}/interview/${emailRequest.id}&details=${encodeURIComponent(emailRequest.description != null
            ? emailRequest.description.substring(0, Math.min(500, emailRequest.description.length))
            : '')}`;
    }
    calculateNewDate(originalDate) {
        const newDate = new Date(originalDate.getTime());
        newDate.setMinutes(newDate.getMinutes() + 30);
        return newDate;
    }
    getMessage(candidateName, jobTitle, companyName, meetingLink, date, calender) {
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
};
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(email_message_entity_1.EmailMessage)),
    __param(1, (0, typeorm_2.InjectRepository)(panel_member_entity_1.PanelMember)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        mailer_1.MailerService])
], MessageService);
//# sourceMappingURL=message.service.js.map