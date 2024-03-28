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
const generative_ai_1 = require("@google/generative-ai");
const functions_1 = require("../../lib/helpers/functions");
let ChatAiService = exports.ChatAiService = class ChatAiService {
    constructor() {
        this.genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLEAI_API_KEY);
    }
    async create(body, client) {
        const model = this.genAI.getGenerativeModel({
            model: process.env.GOOGLEAI_API_MODEL,
        });
        const currentMessage = body.pop();
        const chat = model.startChat({
            history: (0, functions_1.mapInterviewData)(body),
            generationConfig: {
                maxOutputTokens: 100,
            },
        });
        const result = await chat.sendMessage(currentMessage.content);
        const text = { message: { content: result?.response?.text(), role: 'model' } };
        client.emit('chatAI', text);
        return text;
    }
};
exports.ChatAiService = ChatAiService = __decorate([
    (0, common_1.Injectable)()
], ChatAiService);
//# sourceMappingURL=chat-ai.service.js.map