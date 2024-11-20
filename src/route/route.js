import express from "express"
import UserController from "../controller/UserController.js";
import ProductController from "../controller/ProductController.js";

const route =  express.Router();

route.get("/product/all", ProductController.getAll);
route.post("/user/register", UserController.create);
route.post("/user/login", UserController.getUnique);




export default route;