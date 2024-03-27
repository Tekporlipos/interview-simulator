import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { EmailRequestDTO } from './dto/create-chat.dto';
import { EmailMessage } from '../../entities/email-message.entity';

describe('MessageController', () => {
  let controller: MessageController;
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    controller = module.get<MessageController>(MessageController);
    service = module.get<MessageService>(MessageService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should return the created message', async () => {
      const emailRequestDTO: EmailRequestDTO = null;

      const createdMessage: EmailMessage = null; // Provide expected return value from the service

      jest.spyOn(service, 'sendEmail').mockResolvedValue(createdMessage);

      const result = await controller.create(emailRequestDTO);

      expect(result).toBe(createdMessage);
    });

    it('should return a bad response if an error occurs', async () => {
      const emailRequestDTO: EmailRequestDTO = null;

      jest
        .spyOn(service, 'sendEmail')
        .mockRejectedValue(new Error('Test error'));

      const result = await controller.create(emailRequestDTO);

      if (!(result instanceof EmailMessage)) {
        expect(result.status).toBe(400);
      }
    });
  });

  describe('findOne', () => {
    it('should return the message with the given ID', () => {
      const messageId = 'testId';
      const foundMessage = null; // Provide expected return value from the service

      jest.spyOn(service, 'findOne').mockReturnValue(foundMessage);

      const result = controller.findOne(messageId);

      expect(result).toBe(foundMessage);
    });
  });
});
