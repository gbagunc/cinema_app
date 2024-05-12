"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const routes_1 = __importDefault(require("./routes"));
const connection_1 = __importDefault(require("./db/connection"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
const StartServer = () => {
    app.use(express_1.default.json());
    (0, connection_1.default)();
    app.use("/api", routes_1.default);
    http_1.default
        .createServer(app)
        .listen(8000, "0.0.0.0", () => console.info(`Server is running on port ${8000}`));
};
StartServer();
//# sourceMappingURL=index.js.map