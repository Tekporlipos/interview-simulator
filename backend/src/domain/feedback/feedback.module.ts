import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { UserFeedback } from '../../entities/user-feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports: [TypeOrmModule.forFeature([UserFeedback])],
})
export class FeedbackModule {}
