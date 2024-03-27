import { FeedbackService } from './feedback.service';
import { FeedBackDTO } from './dto/create-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(createFeedbackDto: FeedBackDTO): Response | Promise<import("../../entities/user-feedback.entity").UserFeedback>;
}
