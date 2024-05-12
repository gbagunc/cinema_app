"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmsModel = void 0;
const mongoose_1 = require("mongoose");
const filmsSchema = new mongoose_1.Schema({
    id: { required: true, type: Number },
    title: { required: true, type: String },
    img: { required: true, type: String },
}, { timestamps: { createdAt: "dtsCreatedAt", updatedAt: "dtsUpdatedAt" } });
exports.FilmsModel = (0, mongoose_1.model)("film", filmsSchema);
//# sourceMappingURL=filmsModel.js.map