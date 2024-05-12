"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationModel = void 0;
const mongoose_1 = require("mongoose");
const reservationSchema = new mongoose_1.Schema({
    id: { required: true, type: Number },
    scheduleId: { required: true, type: Number },
    seatId: { required: true, type: Number },
}, { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } });
exports.ReservationModel = (0, mongoose_1.model)("reservation", reservationSchema);
//# sourceMappingURL=reservationsModel.js.map