import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import { CreateSuplierSchema } from "../schemas/suplierSchema";
import {
  deleteSuplierController,
  listAllSupliersController,
  listSuplierByIdController,
  registerSuplierController,
  updateSuplierController,
} from "../controllers/suplier.controller";
import { isAuthenticated } from "../middlewares/authentication.middleware";

const router = Router();

export const suplierRouter = () => {
  router.post("", validate(CreateSuplierSchema), registerSuplierController);
  router.get("/:id", isAuthenticated, listSuplierByIdController);
  router.get("", listAllSupliersController);
  router.patch("/:id", isAuthenticated, updateSuplierController);
  router.delete("/:id", isAuthenticated, deleteSuplierController);

  return router;
};
