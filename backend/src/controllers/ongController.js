const crypto = require('crypto') // Importa o pacote "crypto" do Node.js
const connectionDB = require('../database/connectionDB.js')

module.exports = {
    async index(request, response) {
        const ongs = await connectionDB('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body // Técnica para acessar o valor de um atributo de um objeto e armazenar em um variável com o mesmo nome

    // randomBytes() => Gera bytes de caracteres aleatórios (4 bytes nesse caso)
    // toString('HEX') => Converte em uma String do tipo hexadecimal
    const id = crypto.randomBytes(4).toString('HEX')

    // Inseri os dados, criando um registro, na tabela "ongs"
    await connectionDB('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json({ id }) // Retorna o ID para o usuário utilizar como o login do cadastro
    }
}