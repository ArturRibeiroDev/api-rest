import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js"; 
import { ProductsController } from "../controllers/Products-Controller.js";

const productsRoutes = Router()

const productsController = new ProductsController()

// Middleware Global (Aplica para todas as rotas abaixo.)
//productsRoutes.use(myMiddleware)

productsRoutes.get("/", productsController.index)

// Middleware local em uma rota específica.
productsRoutes.post("/", myMiddleware, productsController.create)

export { productsRoutes } 