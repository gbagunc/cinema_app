"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const films_controller_1 = require("../controllers/films.controller");
const filmsRoutes = (0, express_1.Router)();
filmsRoutes.get("/:roomId", films_controller_1.filmsController.getFilmsByRoomId);
exports.default = filmsRoutes;
//# sourceMappingURL=films.js.map