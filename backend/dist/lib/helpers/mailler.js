"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = require("nodemailer");
exports.transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env['MAIL_USERNAME'],
        pass: process.env['MAIL_PASSWORD'],
    },
});
//# sourceMappingURL=mailler.js.map