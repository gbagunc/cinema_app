"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesModel = void 0;
const mongoose_1 = require("mongoose");
const schedulesSchema = new mongoose_1.Schema({
    id: { required: true, type: Number },
    date: { required: true, type: Date },
    filmId: { required: true, type: Number },
    roomId: { required: true, type: Number },
}, { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } });
exports.SchedulesModel = (0, mongoose_1.model)("schedule", schedulesSchema);
//# sourceMappingURL=schedules.js.map