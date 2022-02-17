import { Router } from "express";
import { createNewCart } from "../controllers/cartProduct.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const cartProductRouter = () => {
  router.post("/:productId", isAuthenticated, createNewCart);

  return router;
};
