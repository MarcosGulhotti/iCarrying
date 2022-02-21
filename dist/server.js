"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT;
(0, typeorm_1.createConnection)().then(function () {
    console.log("Database connected!");
    app_1.default.listen(PORT, function () {
        console.log("Running at http://localhost:".concat(PORT));
    });
}).catch(function (error) { return console.log(error); });
//# sourceMappingURL=server.js.map