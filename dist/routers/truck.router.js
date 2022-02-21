"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truckRouter = void 0;
var express_1 = require("express");
var truck_controller_1 = require("../controllers/truck.controller");
var validation_middleware_1 = require("../middlewares/validation.middleware");
var authentication_middleware_1 = require("../middlewares/authentication.middleware");
var authorization_middleware_1 = require("../middlewares/authorization.middleware");
var truckSchema_1 = require("../schemas/truckSchema");
var router = (0, express_1.Router)();
var truckRouter = function () {
    router.post("", (0, validation_middleware_1.validate)(truckSchema_1.TruckSchema), authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmCheck, truck_controller_1.registerTruck);
    router.get("", truck_controller_1.getAllTrucks);
    router.get("/:id", truck_controller_1.getOneTruckById);
    router.patch("/:id", authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmCheck, truck_controller_1.updateOneTruck);
    router.delete("/:id", authentication_middleware_1.isAuthenticated, authorization_middleware_1.isAdmCheck, truck_controller_1.deleteOneTruck);
    return router;
};
exports.truckRouter = truckRouter;
//# sourceMappingURL=truck.router.js.map