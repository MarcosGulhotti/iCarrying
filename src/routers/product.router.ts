import { Router } from "express";
import { createProductController } from "../controllers/product.controller";
import { validate } from "../middlewares/validation.middleware";
import { CreateProductSchema } from "../schemas/productSchema";

const router = Router();

export const productRouter = () => {
  router.post("/suplier/:id", validate(CreateProductSchema), createProductController);

  return router;
};
