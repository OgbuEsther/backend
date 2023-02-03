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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOne = exports.getOne = exports.postGear = exports.getAll = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const GearModel_1 = __importDefault(require("../model/GearModel"));
const appError_1 = require("../utils/appError");
const asyncHandler_1 = require("../utils/asyncHandler");
exports.getAll = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield GearModel_1.default.find();
    if (!user) {
        next(new appError_1.AppError({
            message: "unable to get all users",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.BAD_REQUEST
        }));
    }
    return res.status(200).json({
        message: "gotten successfully",
        data: user
    });
}));
exports.postGear = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, status, image, views } = req.body;
    const cloudImg = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
    const user = yield GearModel_1.default.create({
        name, price, status, image: cloudImg.secure_url, views
    });
    if (!user) {
        next(new appError_1.AppError({
            message: "unable to post users",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.BAD_REQUEST
        }));
    }
    return res.status(201).json({
        message: "created gear",
        data: user
    });
}));
//get one
exports.getOne = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield GearModel_1.default.findById(req.params.id);
    if (!user) {
        next(new appError_1.AppError({
            message: "unable to get all users",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.BAD_REQUEST
        }));
    }
    return res.status(200).json({
        message: "gotten one successfully",
        data: user
    });
}));
//delete
exports.removeOne = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield GearModel_1.default.findByIdAndRemove(req.params.id);
    if (!user) {
        next(new appError_1.AppError({
            message: "unable to get all users",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.BAD_REQUEST
        }));
    }
    return res.status(200).json({
        message: "removed one successfully",
        data: user
    });
}));
