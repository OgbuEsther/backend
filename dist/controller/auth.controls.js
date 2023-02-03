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
exports.getUser = exports.loginUser = exports.regsiterUser = void 0;
const auth_model_1 = __importDefault(require("../model/auth.model"));
const appError_1 = require("../utils/appError");
const asyncHandler_1 = require("../utils/asyncHandler");
//register
exports.regsiterUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, isAdmin } = req.body;
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password , salt)
    const defaultPassword = "admin";
    if (password === defaultPassword) {
        const user = yield auth_model_1.default.create({
            email, password: defaultPassword, name, isAdmin
        });
    }
    else {
        next(new appError_1.AppError({
            message: "unable to register ....you are not authorised",
            httpcode: appError_1.HttpCodes.BAD_REQUEST
        }));
    }
    // if(!user){
    //     next(
    //         new AppError({
    //             message : "failed to register user",
    //             httpcode : HttpCodes.BAD_REQUEST,
    //             name : AppError.name,
    //             isOperational : true
    //         })
    //     )
    // }
    return res.status(201).json({
        message: "created successfully",
        // data : user
    });
}));
//login
exports.loginUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email) {
        next(new appError_1.AppError({
            message: "email is required",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.BAD_REQUEST,
            isOperational: true
        }));
    }
    const user = yield auth_model_1.default.findOne({ email, password });
    // const checkPassword = await bcrypt.compare(password, user!.password)
    if (!user) {
        next(new appError_1.AppError({
            message: "user not found",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.NOT_FOUND
        }));
    }
    // if (!checkPassword) {
    //     next(
    //       new AppError({
    //         message : "invalid password and email", 
    //         name : AppError.name,
    //         httpcode : HttpCodes.NOT_FOUND
    //       })
    //     )
    //     }
    return res.status(appError_1.HttpCodes.OK).json({
        message: "logged in successfully",
        data: user
    });
}));
exports.getUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.default.find();
    if (!user) {
        next(new appError_1.AppError({
            message: "user not found",
            name: appError_1.AppError.name,
            httpcode: appError_1.HttpCodes.NOT_FOUND,
            isOperational: true
        }));
    }
    return res.status(200).json({
        message: "gotten all users",
        data: user
    });
}));
