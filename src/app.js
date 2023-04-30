import express from "express";
import db from "./config/dbConnect.js";
import cors from "cors"
import routes from "./routes/index.js";

function connectDatabase() {
  db.on("error", (error) => console.log(error))
  db.once("open", () => console.log("Conexão com o Banco Estabelecida"))
}


connectDatabase();


const app = express();


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}));

routes(app);

export default app;
