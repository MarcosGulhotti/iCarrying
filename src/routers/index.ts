import { Express } from "express";
import { loginRouter } from "./login.router";
import { marketRouter } from "./market.router";
import { productRouter } from "./product.router";
import { suplierRouter } from "./suplier.router";

export const initializerRouter = (app: Express) => {
  app.use("/market", marketRouter());
  app.use("/suplier", suplierRouter());
  app.use("/product", productRouter());
  app.use("/login", loginRouter());
};