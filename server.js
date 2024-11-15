import { PrismaClient } from "@prisma/client";
import express, { json } from "express";


const prisma = new PrismaClient();

const app = express();
const porta = 3000;
app.use(json());


app.get('/', (req, res)=> {
    res.send("Hello World, express!!");
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    
});
