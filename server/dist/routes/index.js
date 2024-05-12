"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const films_1 = __importDefault(require("./films"));
const rooms_1 = __importDefault(require("./rooms"));
const router = (0, express_1.Router)();
router.use("/films", films_1.default);
router.use("/rooms", rooms_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map