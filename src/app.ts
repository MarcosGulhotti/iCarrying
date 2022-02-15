import express from "express";
import "reflect-metadata";
import { initializerRouter } from "./routers";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "application working" });
});

initializerRouter(app);

export default app;
