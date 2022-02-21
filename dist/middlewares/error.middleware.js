"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var AppError_1 = __importDefault(require("../errors/AppError"));
var errorHandler = function (error, req, res, next) {
    if (error instanceof AppError_1.default) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map