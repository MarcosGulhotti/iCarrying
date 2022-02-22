import { Router } from "express";
import { addInCart } from "../controllers/cartProduct.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const cartProductRouter = () => {
  router.post("/:productId", isAuthenticated, addInCart);

  return router;
};
