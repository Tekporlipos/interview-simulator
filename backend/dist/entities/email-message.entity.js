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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessage = void 0;
const typeorm_1 = require("typeorm");
const panel_member_entity_1 = require("./panel-member.entity");
let EmailMessage = exports.EmailMessage = class EmailMessage {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EmailMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EmailMessage.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2000, nullable: true }),
    __metadata("design:type", String)
], EmailMessage.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EmailMessage.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EmailMessage.prototype, "interview_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], EmailMessage.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], EmailMessage.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => panel_member_entity_1.PanelMember, (panelMember) => panelMember.emailMessage),
    __metadata("design:type", Array)
], EmailMessage.prototype, "panelMembers", void 0);
exports.EmailMessage = EmailMessage = __decorate([
    (0, typeorm_1.Entity)('email_message')
], EmailMessage);
//# sourceMappingURL=email-message.entity.js.map