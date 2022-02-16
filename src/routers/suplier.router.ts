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

const router = Router();

export const suplierRouter = () => {
  router.post("", validate(CreateSuplierSchema), registerSuplierController);
  router.get("/:id", listSuplierByIdController);
  router.get("", listAllSupliersController);
  router.patch("/:id", updateSuplierController);
  router.delete("/:id", deleteSuplierController);

  return router;
};
