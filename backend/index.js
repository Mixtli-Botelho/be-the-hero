const express = require('express') // Importação do módulo/micro framework "Express"

const app = express() // app => Objeto que será a aplicação

app.listen(3333) // O método listen() define a porta da aplicação

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Mixtli Botelho"
    })
})