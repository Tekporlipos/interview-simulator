import { Injectable } from '@nestjs/common';
import { FeedBackDTO } from './dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFeedback } from '../../entities/user-feedback.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(UserFeedback)
    private readonly userFeedbackRepository: Repository<UserFeedback>,
  ) {}
  async create(createFeedbackDto: FeedBackDTO) {
    const feedback = new UserFeedback();
    feedback.message = createFeedbackDto.message;
    feedback.user_id = createFeedbackDto.userId;
    feedback.submission_date = new Date(createFeedbackDto.submissionDate);
    return await this.userFeedbackRepository.save(feedback);
  }
}
