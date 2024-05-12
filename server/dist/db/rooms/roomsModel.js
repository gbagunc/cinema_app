"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsModel = void 0;
const mongoose_1 = require("mongoose");
const roomsSchema = new mongoose_1.Schema({
    id: { required: true, type: Number },
    name: { required: true, type: String },
}, { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } });
exports.RoomsModel = (0, mongoose_1.model)("rooms", roomsSchema);
//# sourceMappingURL=roomsModel.js.map