import { Router } from "express";

import { registerMarket } from "../controllers/market.controller";

const router = Router();

export const marketRouter = () => {
    router.post("", registerMarket);

    return router;
}