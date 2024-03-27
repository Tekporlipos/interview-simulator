import { Test, TestingModule } from '@nestjs/testing';
import { ChatAiService } from './chat-ai.service';
import { CreateChatAiDto } from './dto/create-chat-ai.dto';
import Anthropic from '@anthropic-ai/sdk';
describe('ChatAiService', () => {
  let service: ChatAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatAiService],
    }).compile();

    service = module.get<ChatAiService>(ChatAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a send-email message', async () => {
    // Mock the dependencies and environment variables
    const createChatAiDto: CreateChatAiDto = {
      data: [{ role: 'user', content: 'Test message' }],
    };
    const client = { emit: jest.fn() };
    process.env.CLAUDE_AI_API_KEY = 'your_api_key';
    process.env.CLAUDE_AI_API_MODEL = 'your_model';

    // Mock the Anthropic messages.create method
    const mockContent = 'Mocked response';

    const mockAnthropic: Anthropic = {
      apiKey: process.env.CLAUDE_AI_API_KEY,
      authToken: null, // Fill with appropriate value if needed
      _options: {}, // Fill with appropriate value if needed
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      completions: {
        create: jest.fn().mockResolvedValue({}),
        _client: undefined,
      },
      _client: null, // Fill with appropriate value if needed
    };

    // Cast the mockAnthropic to Anthropic
    service.anthropic = mockAnthropic as Anthropic;

    // Call the service method
    const result = await service.create(createChatAiDto, client as any);

    // Check if the Anthropic messages.create method was called with the correct parameters
    expect(mockAnthropic.messages.create).toHaveBeenCalledWith({
      model: process.env.CLAUDE_AI_API_MODEL,
      max_tokens: 1024,
      messages: 'Test message',
    });

    // Check if the client.emit method was called with the correct parameters
    expect(client.emit).toHaveBeenCalledWith('chatAI', mockContent);

    // Check if the result is correct
    expect(result).toEqual(mockContent);
  });
});
