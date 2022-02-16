import { Express } from "express";
import { marketRouter } from "./market.router";
import { truckRouter } from "./truck.router";

export const initializerRouter = (app: Express) => {
    app.use("/market", marketRouter());
    app.use("/truck", truckRouter());
}