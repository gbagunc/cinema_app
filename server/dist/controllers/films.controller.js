"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmsController = void 0;
const films_service_1 = require("../services/films.service");
const helpers_1 = require("../utils/helpers");
class FilmsController {
    getFilmsByRoomId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { roomId } = req.params;
                const room = yield films_service_1.filmsService.getFilmsByRoomId(Number(roomId));
                if (room) {
                    return (0, helpers_1.successResponse)(res, room);
                }
                else {
                    return (0, helpers_1.notFoundResponse)(res);
                }
            }
            catch (e) {
                return next(e);
            }
        });
    }
}
exports.filmsController = new FilmsController();
//# sourceMappingURL=films.controller.js.map