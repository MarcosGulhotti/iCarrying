import { Express } from "express";
import { loginRouter } from "./login.router";
import { marketRouter } from "./market.router";
import { truckRouter } from "./truck.router";
import { productRouter } from "./product.router";
import { suplierRouter } from "./suplier.router";
import { admRouter } from "./adm.router";

export const initializerRouter = (app: Express) => {
  app.use("/market", marketRouter());
  app.use("/suplier", suplierRouter());
  app.use("/product", productRouter());
  app.use("/market", marketRouter());
  app.use("/truck", truckRouter());
  app.use("/login", loginRouter());
  app.use("/adm", admRouter());
};
