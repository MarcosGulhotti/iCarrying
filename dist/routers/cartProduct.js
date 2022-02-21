"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartProductRouter = void 0;
var express_1 = require("express");
var cartProduct_controller_1 = require("../controllers/cartProduct.controller");
var authentication_middleware_1 = require("../middlewares/authentication.middleware");
var router = (0, express_1.Router)();
var cartProductRouter = function () {
    router.post("/:productId", authentication_middleware_1.isAuthenticated, cartProduct_controller_1.createNewCart);
    return router;
};
exports.cartProductRouter = cartProductRouter;
//# sourceMappingURL=cartProduct.js.map