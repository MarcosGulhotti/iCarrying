import {Router} from "express";
import {
    createNewCart,
    seeProductsCart,
} from "../controllers/cartProduct.controller";
import {isAuthenticated} from "../middlewares/authentication.middleware";

const router = Router();

export const cartProductRouter = () => {
    router.post("/:productId", isAuthenticated, createNewCart);
    router.get("", isAuthenticated, seeProductsCart);

    return router;
};
