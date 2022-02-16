import { Router } from "express";
import { marketLogin, supplierLogin } from "../controllers/login.controller";

const router = Router();

export const loginRouter = () => {
  router.post("/market", marketLogin);
  router.post("/suplier", supplierLogin);

  return router;
};
