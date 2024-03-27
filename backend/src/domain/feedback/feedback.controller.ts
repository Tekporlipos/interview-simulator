import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedBackDTO } from './dto/create-feedback.dto';

@Controller('api/v1/feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createFeedbackDto: FeedBackDTO) {
    try {
      return this.feedbackService.create(createFeedbackDto);
    } catch (error) {
      return new Response('Error sending email', {
        status: 400,
      });
    }
  }
}
