"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseTypeEntity = void 0;
function getResponseTypeEntity(audioData, res) {
    res.status(200);
    res.set({
        'Content-Type': 'audio/mp3',
        'access-control-allow-origin': process.env.APP_URL || '*',
        'access-control-allow-methods': 'GET, POST, PUT, PATCH, DELETE',
        'access-control-allow-headers': 'Content-Type, Authorization',
        'access-control-allow-credentials': 'true',
        'access-control-expose-headers': 'X-Custom-Header, Another-Header',
        'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src data: https:",
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'SAMEORIGIN',
        'x-xss-protection': '1; mode=block',
        'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
        'referrer-policy': 'strict-origin-when-cross-origin',
    });
    res.send(audioData);
}
exports.getResponseTypeEntity = getResponseTypeEntity;
//# sourceMappingURL=ResponseEntity.js.map