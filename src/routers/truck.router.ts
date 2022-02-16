import { Router } from "express";

import { registerTruck } from "../controllers/truck.controller";
import { validate } from "../middlewares/validation.middleware";
import { TruckSchema } from "../schemas/truckSchema";

const router = Router();

export const truckRouter = () => {
    router.post("", validate(TruckSchema), registerTruck);

    return router;
}