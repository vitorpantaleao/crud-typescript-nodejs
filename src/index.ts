import express from 'express'
import errorHandler from './middlewares/error-handler.middware'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()

// Config da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Config de rotas
app.use(usersRoute)
app.use(statusRoute)

// Configuração dos Handlers de Erro
app.use(errorHandler)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000')
})