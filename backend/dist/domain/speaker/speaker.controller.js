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
exports.SpeakerController = void 0;
const common_1 = require("@nestjs/common");
const speaker_service_1 = require("./speaker.service");
const ResponseEntity_1 = require("../../lib/helpers/ResponseEntity");
let SpeakerController = exports.SpeakerController = class SpeakerController {
    constructor(speakerService) {
        this.speakerService = speakerService;
    }
    async findAll(res, word, voice) {
        const buffer = await this.speakerService.speak(word, voice);
        return (0, ResponseEntity_1.getResponseTypeEntity)(buffer, res);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('word')),
    __param(2, (0, common_1.Query)('voice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], SpeakerController.prototype, "findAll", null);
exports.SpeakerController = SpeakerController = __decorate([
    (0, common_1.Controller)('/api/v1/speaker'),
    __metadata("design:paramtypes", [speaker_service_1.SpeakerService])
], SpeakerController);
//# sourceMappingURL=speaker.controller.js.map