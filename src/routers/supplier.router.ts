import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import { CreateSupplierSchema } from "../schemas/supplierSchema";
import {
  deleteSupplierController,
  listAllSuppliersController,
  listSupplierByIdController,
  registerSupplierController,
  updateSupplierController,
} from "../controllers/supplier.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const supplierRouter = () => {
  router.post("", validate(CreateSupplierSchema), registerSupplierController);
  router.get("/:id", listSupplierByIdController);
  router.get("", listAllSuppliersController);
  router.patch("/:id", isAuthenticated, updateSupplierController);
  router.delete("/:id", isAuthenticated, deleteSupplierController);

  return router;
};
