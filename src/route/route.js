import express from "express"
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";
import validate from "../middleware/tokenValidate.js";

const route =  express.Router();

route.get("/product/all", ProductController.getAll);
route.post("/user/register", UserController.create);
route.post("/user/login", UserController.getUnique);
route.get("/painel/product", validate, (request, response) => {
    response.status(200).json("Você está autorizado para acessar essa rota");
})





export default route;