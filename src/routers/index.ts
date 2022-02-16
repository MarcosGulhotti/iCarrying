import { Express } from "express";
import { loginRouter } from "./login.router";
import { marketRouter } from "./market.router";
import { productRouter } from "./product.router";
import { suplierRouter } from "./suplier.router";

export const initializerRouter = (app: Express) => {
<<<<<<< HEAD
  app.use("/market", marketRouter());
  app.use("/suplier", suplierRouter());
  app.use("/product", productRouter());
};
=======
    app.use("/market", marketRouter());
    app.use("/login", loginRouter());
}
>>>>>>> 348bcbf8995a6fe49c9ccb14589abe6d8da86be7
