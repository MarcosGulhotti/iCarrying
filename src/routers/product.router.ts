import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listAllProductsController,
  listAllProductsFromSupplierController,
  listProductByIdController,
  updateProductController,
} from "../controllers/product.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { validate } from "../middlewares/validation.middleware";
import { CreateProductSchema } from "../schemas/productSchema";

const router = Router();

export const productRouter = () => {
  router.post(
    "/supplier/:id",
    validate(CreateProductSchema),
    createProductController
  );
  router.get("/:id", isAuthenticated, listProductByIdController);
  router.get("/", isAuthenticated, listAllProductsController);
  router.get(
    "/supplier/:id",
    isAuthenticated,
    listAllProductsFromSupplierController
  );
  router.patch("/:id", isAuthenticated, updateProductController);
  router.delete("/:id", isAuthenticated, deleteProductController);

  return router;
};
