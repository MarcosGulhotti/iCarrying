import { Router } from "express";

import { registerMarket, getMarket, listMarkets, updateMarket, removeMarket } from "../controllers/market.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isAdmCheck, isMarketOwnerCheck } from "../middlewares/authorization.middleware";
import { validate } from "../middlewares/validation.middleware";
import { CreateMarketSchema, updateMarketSchema } from "../schemas/marketSchema";

const router = Router();

export const marketRouter = () => {
    router.post("", validate(CreateMarketSchema), registerMarket);
    router.get("/:id", getMarket);
    router.get("",listMarkets);
    router.patch("/:id", validate(updateMarketSchema), isAuthenticated, isMarketOwnerCheck, isAdmCheck, updateMarket);
    router.delete("/:id", isAuthenticated, isMarketOwnerCheck, isAdmCheck, removeMarket);

    return router;
}