const knex = require('knex')
const configuration = require('../../knexfile.js') // Importa o arquivo com as configurações do nosso DB

const connectionDB = knex(configuration.development)

module.exports = connectionDB