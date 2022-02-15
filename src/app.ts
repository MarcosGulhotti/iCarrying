import express from "express";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "application working" });
});

export default app;
