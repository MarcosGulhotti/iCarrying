"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierRouter = void 0;
var express_1 = require("express");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var supplierSchema_1 = require("../schemas/supplierSchema");
var supplier_controller_1 = require("../controllers/supplier.controller");
var authentication_middleware_1 = require("../middlewares/authentication.middleware");
var router = (0, express_1.Router)();
var supplierRouter = function () {
    router.post("", (0, validation_middleware_1.validate)(supplierSchema_1.CreateSupplierSchema), supplier_controller_1.registerSupplierController);
    router.get("/:id", supplier_controller_1.listSupplierByIdController);
    router.get("", supplier_controller_1.listAllSuppliersController);
    router.patch("/:id", authentication_middleware_1.isAuthenticated, supplier_controller_1.updateSupplierController);
    router.delete("/:id", authentication_middleware_1.isAuthenticated, supplier_controller_1.deleteSupplierController);
    return router;
};
exports.supplierRouter = supplierRouter;
//# sourceMappingURL=supplier.router.js.map