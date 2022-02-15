import { Express } from "express";
import { marketRouter } from "./market.router";

export const initializerRouter = (app: Express) => {
    app.use("/market", marketRouter());
}