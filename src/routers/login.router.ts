import { Router } from "express";
import { marketLogin, supplierLogin, admLogin } from "../controllers/login.controller";

const router = Router();

export const loginRouter = () => {
  router.post("/market", marketLogin);
  router.post("/supplier", supplierLogin);
  router.post("/adm", admLogin);

  return router;
};
