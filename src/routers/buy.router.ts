import { Router } from "express";

import { getBuy, purchase } from "../controllers/buy.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmCheck, isBuyOwnerCheck } from "../middlewares/authorization.middleware";

const router = Router();

export const buyRouter = () => {
    router.post("", isAuthenticated, purchase);
    router.get("/:id", isAuthenticated, isBuyOwnerCheck, isAdmCheck, getBuy);

    return router;
}