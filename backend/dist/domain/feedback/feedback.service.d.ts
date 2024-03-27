import { FeedBackDTO } from './dto/create-feedback.dto';
import { UserFeedback } from '../../entities/user-feedback.entity';
import { Repository } from 'typeorm';
export declare class FeedbackService {
    private readonly userFeedbackRepository;
    constructor(userFeedbackRepository: Repository<UserFeedback>);
    create(createFeedbackDto: FeedBackDTO): Promise<UserFeedback>;
}
