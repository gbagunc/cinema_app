"use strict";
// import mongoose from "mongoose";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const connection = mongoose.createConnection("mongodb://localhost:27017/", {
//   dbName: "cinema",
// });
// export { connection };
const mongoose_1 = __importDefault(require("mongoose"));
// import { config } from "../config/config";
// import logger from "../services/logger";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default
        .connect("mongodb://localhost:27017/")
        .then(() => {
        console.info("MongoDB Connected");
    })
        .catch((error) => {
        console.error(error.message);
    });
});
exports.default = connectDB;
//# sourceMappingURL=connection.js.map