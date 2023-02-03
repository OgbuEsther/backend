"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const gear_controls_1 = require("../controller/gear.controls");
const gearRouter = (0, express_1.Router)();
gearRouter.route("/getall").get(gear_controls_1.getAll);
gearRouter.route("/getone/:id").get(gear_controls_1.getOne);
gearRouter.route("/remove/:id").delete(gear_controls_1.removeOne);
gearRouter.route("/newgear").post(multer_1.default, gear_controls_1.postGear);
exports.default = gearRouter;
