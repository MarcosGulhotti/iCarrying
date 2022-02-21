"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
var express_1 = require("express");
var login_controller_1 = require("../controllers/login.controller");
var router = (0, express_1.Router)();
var loginRouter = function () {
    router.post("/market", login_controller_1.marketLogin);
    router.post("/suplier", login_controller_1.supplierLogin);
    router.post("/adm", login_controller_1.admLogin);
    return router;
};
exports.loginRouter = loginRouter;
//# sourceMappingURL=login.router.js.map