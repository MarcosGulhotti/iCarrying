import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import { CreateSupplierSchema, VoteSupplierSchema } from "../schemas/supplierSchema";
import {
  deleteSupplierController,
  listAllSuppliersController,
  listSupplierByIdController,
  registerSupplierController,
  updateSupplierController,
  vote,
} from "../controllers/supplier.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";
import { isMarketCheck } from "../middlewares/authorization.middleware";

const router = Router();

export const supplierRouter = () => {
  router.post("", validate(CreateSupplierSchema), registerSupplierController);
  router.get("/:id", listSupplierByIdController);
  router.get("", listAllSuppliersController);
  router.patch("/:id", isAuthenticated, updateSupplierController);
  router.delete("/:id", isAuthenticated, deleteSupplierController);
  router.post("/:id/vote", validate(VoteSupplierSchema), isAuthenticated, isMarketCheck, vote);

  return router;
};
