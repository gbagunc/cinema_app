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
exports.filmsRepository = void 0;
const filmsModel_1 = require("./filmsModel");
class FilmsRepository {
    constructor() { }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return filmsModel_1.FilmsModel.findById(id);
        });
    }
    getByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return filmsModel_1.FilmsModel.find({ id: { $in: ids } });
        });
    }
}
exports.filmsRepository = new FilmsRepository();
//# sourceMappingURL=filmsRepository.js.map