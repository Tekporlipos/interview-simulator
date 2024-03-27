import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmailMessage } from '../../entities/email-message.entity';
import { PanelMember } from '../../entities/panel-member.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailRequestDTO } from './dto/create-chat.dto';

describe('MessageService', () => {
  let service: MessageService;
  let emailRepositoryMock: any;
  let panelMemberRepositoryMock: any;
  let mailerServiceMock: any;

  beforeEach(async () => {
    emailRepositoryMock = {
      save: jest.fn(),
    };
    panelMemberRepositoryMock = {
      save: jest.fn(),
    };
    mailerServiceMock = {
      sendMail: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessageService,
        {
          provide: getRepositoryToken(EmailMessage),
          useValue: emailRepositoryMock,
        },
        {
          provide: getRepositoryToken(PanelMember),
          useValue: panelMemberRepositoryMock,
        },
        { provide: MailerService, useValue: mailerServiceMock },
      ],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('sendEmail', () => {
    it('should save email message and panel members and send email', async () => {
      const emailRequestDTO: EmailRequestDTO = null;

      const emailMessage = new EmailMessage();
      const panelMembers = [new PanelMember()];

      jest.spyOn(emailRepositoryMock, 'save').mockResolvedValue(emailMessage);
      jest
        .spyOn(panelMemberRepositoryMock, 'save')
        .mockResolvedValue(panelMembers);

      await service.sendEmail(emailRequestDTO);

      expect(emailRepositoryMock.save).toHaveBeenCalled();
      expect(panelMemberRepositoryMock.save).toHaveBeenCalled();
      expect(mailerServiceMock.sendMail).toHaveBeenCalled();
    });

    it('should handle errors', async () => {
      const emailRequestDTO: EmailRequestDTO = null;
      jest
        .spyOn(emailRepositoryMock, 'save')
        .mockRejectedValue(new Error('Test error'));

      await expect(service.sendEmail(emailRequestDTO)).rejects.toThrowError();
    });
  });
});
