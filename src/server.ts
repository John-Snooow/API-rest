import express from 'express'

const PORT = 3333
const app = express()
app.use(express.json())

app.get('/products', (request, response) => {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit} `)
})

app.post('/products', (request, response) => {
    const { name, price } = request.body

    //response.send(`O produto ${name} custa ${price} `) => Visualizam o objeto em formato de texto
    response.status(201).json({ name, price })//vizualiza o mesmo objeto no insomnia
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))    