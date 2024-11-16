import { PrismaClient } from "@prisma/client";
import express, { json } from "express";


const prisma = new PrismaClient();

const app = express();
const porta = 3000;
app.use(json());


app.get('/', async (req, res)=> {
    const created = await prisma.users.create(
        {
            data:{
                email: "arthur@gmail.com",
                nome: "arthur"
            }
        }
    )
    res.send(created);
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    
});