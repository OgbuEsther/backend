"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const gearSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: [true, "please enter an image"],
    },
    views: {
        type: [],
    },
});
const gearModel = mongoose_1.default.model("gearCollections", gearSchema);
exports.default = gearModel;
