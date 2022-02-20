import {Router} from "express";

import {
    delDelivery,
    getDelivery,
    listDeliverys,
    registerDelivery,
    updateDelivery,
} from "../controllers/delivery.controller";
import {isAuthenticated} from "../middlewares/authentication.middleware";
import {isAdmCheck} from "../middlewares/authorization.middleware";
import {validate} from "../middlewares/validation.middleware";
import {
    CreateDeliverySchema,
    updateDeliverySchema,
} from "../schemas/deliverySchema";

const router = Router();

export const deliveryRouter = () => {
    router.post(
        "",
        isAuthenticated,
        isAdmCheck,
        validate(CreateDeliverySchema),
        registerDelivery
    );
    router.get("/:id", isAuthenticated, getDelivery);
    router.get("", isAuthenticated, isAdmCheck, listDeliverys);
    router.delete("/:id", isAuthenticated, isAdmCheck, delDelivery);
    router.put(
        "/:id",
        isAuthenticated,
        isAdmCheck,
        validate(updateDeliverySchema),
        updateDelivery
    );
    return router;
};
