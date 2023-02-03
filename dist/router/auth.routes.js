"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controls_1 = require("../controller/auth.controls");
const authRouter = (0, express_1.Router)();
authRouter.route("/register").post(auth_controls_1.regsiterUser);
authRouter.route("/login").post(auth_controls_1.loginUser);
authRouter.route("/get").get(auth_controls_1.getUser);
exports.default = authRouter;
