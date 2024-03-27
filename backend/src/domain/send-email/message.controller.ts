import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { EmailRequestDTO } from './dto/create-chat.dto';

@Controller('api/v1/send-email/')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createMessageDto: EmailRequestDTO) {
    try {
      return await this.messageService.sendEmail(createMessageDto);
    } catch (error) {
      return new Response('Bad response', {
        status: 400,
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
