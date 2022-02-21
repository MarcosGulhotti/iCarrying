"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var error_middleware_1 = require("./middlewares/error.middleware");
var routers_1 = require("./routers");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send({ message: "application working" });
});
(0, routers_1.initializerRouter)(app);
app.use(error_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map