import { Router } from "express";
import { marketLogin } from "../controllers/login.controller";

const router = Router();

export const loginRouter = () => {
  router.post("/market", marketLogin);

  return router;
};
