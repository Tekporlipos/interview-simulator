"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToEmailRequest = exports.requestExtractor = void 0;
function requestExtractor(req) {
    const strings = req.url.split('/');
    return strings.length > 0 ? strings[strings.length - 1] : null;
}
exports.requestExtractor = requestExtractor;
function mapToEmailRequest(data) {
    return {
        full_name: data.full_name,
        recipient: data.recipient,
        interview_id: data.interview_id,
        description: data.description,
        position: data.position,
        date: data.date,
        panel_members: data.panel_members,
    };
}
exports.mapToEmailRequest = mapToEmailRequest;
//# sourceMappingURL=RequestExtractor.js.map