"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AppError_1 = __importDefault(require("../errors/AppError"));
var isAuthenticated = function (req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (token === undefined) {
        return next(new AppError_1.default("Missing authorization headres", 401));
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (error, decoded) {
        if (error) {
            return next(new AppError_1.default("Unauthorized", 401));
        }
        req.currentUser = decoded.user;
        next();
    });
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=authentication.middleware.js.map