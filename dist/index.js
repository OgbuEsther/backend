"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
(0, app_1.appConfig)(app);
(0, db_1.dbConfig)();
const port = process.env.PORT || 7070;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
