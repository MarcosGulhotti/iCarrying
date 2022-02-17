import {Router} from "express";

import {
    delDelivery,
    getDelivery,
    listDeliverys,
    registerDelivery,
    updateDelivery,
} from "../controllers/delivery.controller";
import {validate} from "../middlewares/validation.middleware";
import {
    CreateDeliverySchema,
    updateDeliverySchema,
} from "../schemas/deliverySchema";

const router = Router();

export const deliveryRouter = () => {
    router.post("", validate(CreateDeliverySchema), registerDelivery);
    router.get("/:id", getDelivery);
    router.get("", listDeliverys);
    router.delete("/:id", delDelivery);
    router.put("/:id", validate(updateDeliverySchema), updateDelivery);
    return router;
};
