"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundResponse = exports.successResponse = void 0;
const successResponse = (res, payload) => {
    return res.status(200).json({
        result: payload,
    });
};
exports.successResponse = successResponse;
const notFoundResponse = (res, message = "Not Found") => {
    return res.status(404).json({
        message,
    });
};
exports.notFoundResponse = notFoundResponse;
//# sourceMappingURL=helpers.js.map