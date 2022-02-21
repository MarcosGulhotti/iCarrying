"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admRouter = void 0;
var express_1 = require("express");
var adm_controller_1 = require("../controllers/adm.controller");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var admSchema_1 = require("../schemas/admSchema");
var router = (0, express_1.Router)();
var admRouter = function () {
    router.post("", (0, validation_middleware_1.validate)(admSchema_1.CreateAdmSchema), /* isAuthenticated, isAdmCheck,*/ adm_controller_1.registerAdm);
    router.get("/:id", adm_controller_1.getAdm);
    router.get("", adm_controller_1.listAdms);
    router.patch("/:id", (0, validation_middleware_1.validate)(admSchema_1.UpdateAdmSchema), /* isAuthenticated, isAdmCheck,*/ adm_controller_1.updateAdm);
    router.delete("/:id", /* isAuthenticated, isAdmCheck,*/ adm_controller_1.removeAdm);
    return router;
};
exports.admRouter = admRouter;
//# sourceMappingURL=adm.router.js.map