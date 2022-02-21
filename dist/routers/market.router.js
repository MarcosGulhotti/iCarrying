"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketRouter = void 0;
var express_1 = require("express");
var market_controller_1 = require("../controllers/market.controller");
var authentication_middleware_1 = require("../middlewares/authentication.middleware");
var authorization_middleware_1 = require("../middlewares/authorization.middleware");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var marketSchema_1 = require("../schemas/marketSchema");
var router = (0, express_1.Router)();
var marketRouter = function () {
    router.post("", (0, validation_middleware_1.validate)(marketSchema_1.CreateMarketSchema), market_controller_1.registerMarket);
    router.get("/:id", market_controller_1.getMarket);
    router.get("", market_controller_1.listMarkets);
    router.patch("/:id", (0, validation_middleware_1.validate)(marketSchema_1.updateMarketSchema), authentication_middleware_1.isAuthenticated, authorization_middleware_1.isMarketOwnerCheck, authorization_middleware_1.isAdmCheck, market_controller_1.updateMarket);
    router.delete("/:id", authentication_middleware_1.isAuthenticated, authorization_middleware_1.isMarketOwnerCheck, authorization_middleware_1.isAdmCheck, market_controller_1.removeMarket);
    return router;
};
exports.marketRouter = marketRouter;
//# sourceMappingURL=market.router.js.map