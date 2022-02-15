import { Router } from "express";

import { registerMarket, getMarket } from "../controllers/market.controller";
import { validate } from "../middlewares/validation.middleware";
import { CreateMarketSchema } from "../schemas/marketSchema";

const router = Router();

export const marketRouter = () => {
    router.post("", validate(CreateMarketSchema), registerMarket);
    router.get("/:id", getMarket);

    return router;
}