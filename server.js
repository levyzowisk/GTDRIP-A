import express, { json } from "express";
import route from "./src/route/Route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const porta = 3000;
app.use(express.json());
app.use(cors());

app.use("/api", route);

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
