"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const process = require("process");
const generateToken = (userId, name, expiresIn) => {
    const secretKey = process.env.SECRET_KEY;
    return jwt.sign({ userId, name }, secretKey, { expiresIn: expiresIn });
};
exports.generateToken = generateToken;
//# sourceMappingURL=generate.token.js.map