"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const appError_1 = require("../../utils/appError");
const devError = (err, res) => {
    return res.status(appError_1.HttpCodes.INTERNAL_SERVER_ERROR).json({
        name: appError_1.AppError.name,
        message: err.message,
        stack: err.stack
    });
};
const errorHandler = (err, req, res, next) => {
    devError(err, res);
};
exports.errorHandler = errorHandler;
