import { Controller, Get, Query, Res } from '@nestjs/common';
import { SpeakerService } from './speaker.service';
import { getResponseTypeEntity } from '../../lib/helpers/ResponseEntity';
import { Response } from 'express';

@Controller('/api/v1/speaker')
export class SpeakerController {
  constructor(private readonly speakerService: SpeakerService) {}
  @Get()
  async findAll(
    @Res() res: Response,
    @Query('word') word: string,
    @Query('voice') voice: string,
  ) {
    const buffer = await this.speakerService.speak(word, voice);
    return getResponseTypeEntity(buffer, res);
  }
}
