import {Express} from "express";
import {loginRouter} from "./login.router";
import {marketRouter} from "./market.router";
import {truckRouter} from "./truck.router";
import {productRouter} from "./product.router";
import {supplierRouter} from "./supplier.router";
import {cartProductRouter} from "./cartProduct";
import {admRouter} from "./adm.router";
import {buyRouter} from "./buy.router";
import {deliveryRouter} from "./delivery.router";
import { geolocalizationRouter } from "./geolocalization.router";

export const initializerRouter = (app: Express) => {
    app.use("/market", marketRouter());
    app.use("/supplier", supplierRouter());
    app.use("/product", productRouter());
    app.use("/truck", truckRouter());
    app.use("/login", loginRouter());
    app.use("/cart", cartProductRouter());
    app.use("/adm", admRouter());
    app.use("/buy", buyRouter());
    app.use("/delivery", deliveryRouter());
    app.use("/geolocalization", geolocalizationRouter());
};
