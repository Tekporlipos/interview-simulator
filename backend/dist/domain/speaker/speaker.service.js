"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeakerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SpeakerService = exports.SpeakerService = class SpeakerService {
    async speak(word, voice) {
        const OPENAI_API_KEY = process.env['OPENAI_API_KEY'];
        if (!OPENAI_API_KEY || !word)
            return null;
        try {
            const response = await axios_1.default.post('https://api.openai.com/v1/audio/speech', {
                model: 'tts-1',
                input: word,
                voice: voice,
                response_format: 'mp3',
            }, {
                responseType: 'arraybuffer',
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SpeakerService = SpeakerService = __decorate([
    (0, common_1.Injectable)()
], SpeakerService);
//# sourceMappingURL=speaker.service.js.map