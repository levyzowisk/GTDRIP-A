import express from "express"
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";

const route =  express.Router();

route.get("/product/all", ProductController.getAll);

















// Entender se a cade requisição é criada uma instância de userController;
route.post("/user/register", UserController.create);    
route.get("/product/all", UserController.readAll);

export default route;