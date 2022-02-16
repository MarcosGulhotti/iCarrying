import { Express } from "express";
import { loginRouter } from "./login.router";
import { marketRouter } from "./market.router";

export const initializerRouter = (app: Express) => {
    app.use("/market", marketRouter());
    app.use("/login", loginRouter());
}