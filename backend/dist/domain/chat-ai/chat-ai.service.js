"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let ChatAiService = exports.ChatAiService = class ChatAiService {
    constructor() {
        this.openai = new openai_1.default();
    }
    async create(body, client) {
        const completion = await this.openai.chat.completions.create({
            messages: body,
            model: 'gpt-3.5-turbo',
        });
        client.emit('chatAI', completion.choices[0]);
        return completion.choices[0];
    }
};
exports.ChatAiService = ChatAiService = __decorate([
    (0, common_1.Injectable)()
], ChatAiService);
//# sourceMappingURL=chat-ai.service.js.map