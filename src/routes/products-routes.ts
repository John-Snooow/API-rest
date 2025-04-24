import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router();

productsRoutes.get('/', (request, response) => {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit} `)
})

//Middleware local em uma rota especifica
productsRoutes.post('/', myMiddleware, (request, response) => {
    const { name, price } = request.body

    //response.send(`O produto ${name} custa ${price} `) => Visualizam o objeto em formato de texto
    response.status(201).json({ name, price, user_id: request.user_id })//vizualiza o mesmo objeto no insomnia
})

export { productsRoutes }