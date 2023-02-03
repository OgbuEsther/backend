"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "please enter your full name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "please enter a valid email address"],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: 4,
        default: "admin"
    },
    isAdmin: {
        type: Boolean,
    },
});
const authModel = mongoose_1.default.model("AuthCollections", userSchema);
exports.default = authModel;
