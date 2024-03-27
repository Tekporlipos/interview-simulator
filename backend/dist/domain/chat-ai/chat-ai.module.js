"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAiModule = void 0;
const common_1 = require("@nestjs/common");
const chat_ai_service_1 = require("./chat-ai.service");
const chat_ai_gateway_1 = require("./chat-ai.gateway");
let ChatAiModule = exports.ChatAiModule = class ChatAiModule {
};
exports.ChatAiModule = ChatAiModule = __decorate([
    (0, common_1.Module)({
        providers: [chat_ai_gateway_1.ChatAiGateway, chat_ai_service_1.ChatAiService],
    })
], ChatAiModule);
//# sourceMappingURL=chat-ai.module.js.map