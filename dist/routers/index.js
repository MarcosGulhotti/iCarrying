"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializerRouter = void 0;
var login_router_1 = require("./login.router");
var market_router_1 = require("./market.router");
var truck_router_1 = require("./truck.router");
var product_router_1 = require("./product.router");
var supplier_router_1 = require("./supplier.router");
var cartProduct_1 = require("./cartProduct");
var adm_router_1 = require("./adm.router");
var initializerRouter = function (app) {
    app.use("/market", (0, market_router_1.marketRouter)());
    app.use("/suplier", (0, supplier_router_1.supplierRouter)());
    app.use("/product", (0, product_router_1.productRouter)());
    app.use("/market", (0, market_router_1.marketRouter)());
    app.use("/truck", (0, truck_router_1.truckRouter)());
    app.use("/login", (0, login_router_1.loginRouter)());
    app.use("/cart", (0, cartProduct_1.cartProductRouter)());
    app.use("/adm", (0, adm_router_1.admRouter)());
};
exports.initializerRouter = initializerRouter;
//# sourceMappingURL=index.js.map