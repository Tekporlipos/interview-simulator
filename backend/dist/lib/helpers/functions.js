"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapInterviewData = exports.generateUUID = void 0;
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.generateUUID = generateUUID;
function mapInterviewData(data) {
    return data.map(item => {
        return { role: item.role, parts: [{ text: item.content }] };
    }).filter(Boolean);
}
exports.mapInterviewData = mapInterviewData;
//# sourceMappingURL=functions.js.map