"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatModel = void 0;
const mongoose_1 = require("mongoose");
const seatSchema = new mongoose_1.Schema({
    id: { required: true, type: Number },
    roomId: { required: true, type: Number },
}, { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } });
exports.SeatModel = (0, mongoose_1.model)("seat", seatSchema);
//# sourceMappingURL=seats.js.map