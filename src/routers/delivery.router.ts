import {Router} from "express";

import {
    getDelivery,
    listDeliverys,
    registerDelivery,
} from "../controllers/delivery.controller";
import {validate} from "../middlewares/validation.middleware";
import {CreateDeliverySchema} from "../schemas/deliverySchema";

const router = Router();

export const deliveryRouter = () => {
    router.post("", validate(CreateDeliverySchema), registerDelivery);
    router.get("/:id", getDelivery);
    router.get("", listDeliverys);

    return router;
};
