import { Router } from "express";

import { purchase } from "../controllers/buy.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const buyRouter = () => {
    router.post("", isAuthenticated, purchase);

    return router;
}