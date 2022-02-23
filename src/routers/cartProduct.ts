import { Router } from "express";
import { addInCart, seeProductsCart } from "../controllers/cartProduct.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const cartProductRouter = () => {
    router.post("/:productId", isAuthenticated, addInCart);
    router.get("", isAuthenticated, seeProductsCart);

    return router;
};
