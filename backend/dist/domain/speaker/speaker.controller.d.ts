import { SpeakerService } from './speaker.service';
import { Response } from 'express';
export declare class SpeakerController {
    private readonly speakerService;
    constructor(speakerService: SpeakerService);
    findAll(res: Response, word: string, voice: string): Promise<void>;
}
