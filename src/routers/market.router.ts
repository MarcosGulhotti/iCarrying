import { Router } from "express";

import { registerMarket, getMarket } from "../controllers/market.controller";

const router = Router();

export const marketRouter = () => {
    router.post("", registerMarket);
    router.get("/:id", getMarket);

    return router;
}