"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandler_1 = require("./middlewares/errors/errorHandler");
const auth_routes_1 = __importDefault(require("./router/auth.routes"));
const gear_routes_1 = __importDefault(require("./router/gear.routes"));
const appConfig = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)()).use((0, morgan_1.default)("dev"));
    app.use("/api/auth", auth_routes_1.default);
    app.use("/api", gear_routes_1.default);
    //
    app.use(errorHandler_1.errorHandler);
};
exports.appConfig = appConfig;
