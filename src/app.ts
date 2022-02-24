import express from "express";
import "reflect-metadata";
import { errorHandler } from "./middlewares/error.middleware";
import { initializerRouter } from "./routers";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "application working" });
});

initializerRouter(app);

app.use(errorHandler);

export default app;
