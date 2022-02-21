import { createConnection } from "typeorm";
import app from "./app";

const PORT = process.env.PORT;

createConnection().then( () => {
  console.log("Database connected!");

  app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
  });

}).catch(error => console.log(error));

