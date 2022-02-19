import { Router } from "express";

import { registerTruck, getAllTrucks, getOneTruckById, updateOneTruck, deleteOneTruck } from "../controllers/truck.controller";
import { validate } from "../middlewares/validation.middleware";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmCheck } from "../middlewares/authorization.middleware";
import { TruckSchema } from "../schemas/truckSchema";

const router = Router();

export const truckRouter = () => {
    router.post("", validate(TruckSchema), isAuthenticated, isAdmCheck, registerTruck);
    router.get("", getAllTrucks);
    router.get("/:id", getOneTruckById);
    router.patch("/:id", isAuthenticated, isAdmCheck, updateOneTruck);
    router.delete("/:id", isAuthenticated, isAdmCheck, deleteOneTruck);

    return router;
}