import { Test, TestingModule } from '@nestjs/testing';
import { ChatAiGateway } from './chat-ai.gateway';
import { ChatAiService } from './chat-ai.service';
import { CreateChatAiDto } from './dto/create-chat-ai.dto';
import { Socket } from 'socket.io';
class MockSocket extends Socket {
  constructor(nsp?: any, client?: any, server?: any) {
    super(nsp || {}, client || {}, server || {});
  }
}
describe('ChatAiGateway', () => {
  let gateway: ChatAiGateway;
  let service: ChatAiService;
  let clientSocket: Socket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatAiGateway,
        {
          provide: ChatAiService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    gateway = module.get<ChatAiGateway>(ChatAiGateway);
    service = module.get<ChatAiService>(ChatAiService);
    clientSocket = new MockSocket(); // Use the MockSocket class
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('create', () => {
    it('should call chatAiService.create with correct parameters', () => {
      const createChatAiDto: CreateChatAiDto = {
        data: [
          {
            role: 'user',
            content: 'Test message',
          },
        ],
      };

      gateway.create(createChatAiDto, clientSocket);

      expect(service.create).toHaveBeenCalledWith(
        createChatAiDto,
        clientSocket,
      );
    });

    it('should return the result from chatAiService.create', () => {
      const createChatAiDto: CreateChatAiDto = {
        data: [
          {
            role: 'user',
            content: 'Test message',
          },
        ],
      };
      const expectedResult = 'Result from service';
      (service.create as jest.Mock).mockReturnValue(expectedResult);

      const result = gateway.create(createChatAiDto, clientSocket);

      expect(result).toBe(expectedResult);
    });
  });
});
