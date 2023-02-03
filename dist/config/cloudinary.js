"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dlb98zagi",
    api_key: "818232649117599",
    api_secret: "udn5wq3dGFPKIAaMCYxAPDCChak",
    secure: true,
});
exports.default = cloudinary_1.v2;
