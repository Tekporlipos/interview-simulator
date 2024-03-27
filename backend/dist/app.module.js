"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_module_1 = require("./domain/send-email/message.module");
const email_message_entity_1 = require("./entities/email-message.entity");
const panel_member_entity_1 = require("./entities/panel-member.entity");
const user_feedback_entity_1 = require("./entities/user-feedback.entity");
const chat_ai_module_1 = require("./domain/chat-ai/chat-ai.module");
const speaker_controller_1 = require("./domain/speaker/speaker.controller");
const speaker_service_1 = require("./domain/speaker/speaker.service");
const feedback_module_1 = require("./domain/feedback/feedback.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST ||
                    'ep-long-sun-00055055-pooler.us-east-1.aws.neon.tech',
                port: 5432,
                username: process.env.POSTGRES_USER || 'default',
                password: process.env.POSTGRES_PASSWORD || 'xW9CQcNvfX2p',
                database: process.env.POSTGRES_DATABASE || 'verceldb',
                entities: [__dirname + '/../**/*.entity.js'],
                synchronize: true,
                ssl: true,
            }),
            message_module_1.MessageModule,
            typeorm_1.TypeOrmModule.forFeature([email_message_entity_1.EmailMessage, panel_member_entity_1.PanelMember, user_feedback_entity_1.UserFeedback]),
            chat_ai_module_1.ChatAiModule,
            feedback_module_1.FeedbackModule,
        ],
        controllers: [speaker_controller_1.SpeakerController],
        providers: [speaker_service_1.SpeakerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map