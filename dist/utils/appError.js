"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.HttpCodes = void 0;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["CREATED"] = 201] = "CREATED";
    HttpCodes[HttpCodes["ACCEPTED"] = 202] = "ACCEPTED";
    HttpCodes[HttpCodes["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpCodes[HttpCodes["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpCodes[HttpCodes["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpCodes[HttpCodes["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpCodes[HttpCodes["FOUND"] = 302] = "FOUND";
    HttpCodes[HttpCodes["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpCodes[HttpCodes["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpCodes[HttpCodes["ACCEPTED_REST"] = 305] = "ACCEPTED_REST";
    HttpCodes[HttpCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCodes[HttpCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCodes[HttpCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpCodes[HttpCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCodes[HttpCodes["CONFLICT"] = 409] = "CONFLICT";
    HttpCodes[HttpCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
class AppError extends Error {
    constructor(args) {
        super(args.message);
        this.isOperational = true;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = args.name || "Error";
        this.httpcode = args.httpcode;
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.AppError = AppError;
