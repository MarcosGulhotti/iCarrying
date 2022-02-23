import { Router } from "express";

import { geolocalizaitor } from "../controllers/geolocalization.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { blockUnauthorizedDelivery } from "../middlewares/authorization.middleware";

const router = Router();

export const geolocalizationRouter = () => {
    router.get("/:id", isAuthenticated, blockUnauthorizedDelivery, geolocalizaitor);

    return router;
}