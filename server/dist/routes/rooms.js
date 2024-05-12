"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rooms_controller_1 = require("./../controllers/rooms.controller");
const express_1 = require("express");
const roomsRoutes = (0, express_1.Router)();
roomsRoutes.get("/", rooms_controller_1.roomsController.getList);
exports.default = roomsRoutes;
//# sourceMappingURL=rooms.js.map