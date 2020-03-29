const express = require('express') // Importa o micro frame work "Express"
const ongController = require('./controllers/ongController.js')
const incidentController = require('./controllers/incidentController.js')
const profileController = require('./controllers/incidentController.js')
const sessionController = require('./controllers/sessionController.js')

const routes = express.Router() // Método Router() pega o módulo de Rotas do Express

// Utiliza-se "post()", pois a intenção é "criar" uma sessão
routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes