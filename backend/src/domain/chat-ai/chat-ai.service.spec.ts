import { ChatAiService } from './chat-ai.service';
import { Socket } from 'socket.io';
import {IInterviewItem} from "../../lib/helpers/RequestExtractor";

// Mocking the GoogleGenerativeAI class
jest.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
      getGenerativeModel: jest.fn().mockReturnValue({
        startChat: jest.fn().mockReturnValue({
          sendMessage: jest.fn().mockResolvedValue({ response: { text: jest.fn() } }),
        }),
      }),
    })),
  };
});

describe('ChatAiService', () => {
  let chatAiService: ChatAiService;
  let socketMock: Socket;

  beforeEach(() => {
    chatAiService = new ChatAiService();
    socketMock = {} as Socket;
  });

  it('should create assistant message', async () => {
    const body: IInterviewItem[] = [
      { role: 'user', content: 'User message 1' },
      { role: 'model', content: 'model question' },
      { role: 'user', content: 'User message 2' },
    ];
    const expectedMessage = {
      message: { content: 'Assistant response', role: 'model' },
    };

    const result = await chatAiService.create(body, socketMock);

    expect(result).toEqual(expectedMessage);
  });
});
