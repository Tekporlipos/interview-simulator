"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAiGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_ai_service_1 = require("./chat-ai.service");
const create_chat_ai_dto_1 = require("./dto/create-chat-ai.dto");
let ChatAiGateway = exports.ChatAiGateway = class ChatAiGateway {
    constructor(chatAiService) {
        this.chatAiService = chatAiService;
    }
    create(createChatAiDto, client) {
        return this.chatAiService.create(createChatAiDto.data, client);
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('chatAI'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_ai_dto_1.CreateChatAiDto,
        socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatAiGateway.prototype, "create", null);
exports.ChatAiGateway = ChatAiGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [chat_ai_service_1.ChatAiService])
], ChatAiGateway);
//# sourceMappingURL=chat-ai.gateway.js.map