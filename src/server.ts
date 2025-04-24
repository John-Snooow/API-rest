import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 3333
const app = express()
app.use(express.json())

//app.use(myMiddleware) //Middleware global, aplicado em todas as rotas a baixo dele


app.get('/products', (request, response) => {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit} `)
})

//Middleware local em uma rota especifica
app.post('/products', myMiddleware, (request, response) => {
    const { name, price } = request.body

    //response.send(`O produto ${name} custa ${price} `) => Visualizam o objeto em formato de texto
    response.status(201).json({ name, price, user_id: request.user_id })//vizualiza o mesmo objeto no insomnia
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))    