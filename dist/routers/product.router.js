"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
var express_1 = require("express");
var product_controller_1 = require("../controllers/product.controller");
var authentication_middleware_1 = require("../middlewares/authentication.middleware");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var productSchema_1 = require("../schemas/productSchema");
var router = (0, express_1.Router)();
var productRouter = function () {
    router.post("/supplier/:id", (0, validation_middleware_1.validate)(productSchema_1.CreateProductSchema), authentication_middleware_1.isAuthenticated, product_controller_1.createProductController);
    router.get("/:id", product_controller_1.listProductByIdController);
    router.get("", product_controller_1.listAllProductsController);
    router.get("/supplier/:id", product_controller_1.listAllProductsFromSupplierController);
    router.patch("/:id", authentication_middleware_1.isAuthenticated, product_controller_1.updateProductController);
    router.delete("/:id", authentication_middleware_1.isAuthenticated, product_controller_1.deleteProductController);
    return router;
};
exports.productRouter = productRouter;
//# sourceMappingURL=product.router.js.map