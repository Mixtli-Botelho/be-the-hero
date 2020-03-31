const connectionDB = require('../database/connectionDB.js')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const [ countIncidents ] = await connectionDB('incidents').count() // Faz a contagem de casos

        const incidents = await connectionDB('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // Relaciona dados de duas tabelas
            // .limit(5) // Limita o número de incidents na pagina
            // .offset((page -1) * 5) // Vai pulando os registro de acordo com a paginação
            .select(
                [
                    'incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'
                ]
            )

        response.header('X-Total-Count', countIncidents['count(*)'])

        return response.json(incidents)
    },

    async create(request, response) {
        const { title, description, value } = request.body

        // Cabeçalho da requisição => Guarda informações do contexto da requisição (autenticação, localização, idioma, etc)
        const ong_id = request.headers.authorization

        const [ id ] = await connectionDB('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const ong_id = request.headers.authorization

        const incident = await connectionDB('incidents') // Acessa a tabela "incidents"
            .where('id', id) // Acessa um registro específico com o valor do "id"
            .select('ong_id') // Seleciona o valor da coluna/atributo "ong_id"
            .first() // retorna apenas 1 resultado

        if (incident.ong_id != ong_id) {
            /*
            response.status() => Troca o status do código HTTP (HTTP Status Code)
                Código 200 => Resposta de Sucesso
                Código 204 => Resposta de Sucesso sem conteúdo para retornar
                Código 400 => "Bad Request", ocorreu algum erro
                Código 401 => Não Autorizado
            */
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connectionDB('incidents').where('id', id).delete()

        return response.status(204).send() // send() => Enviar resposta sem corpo, vazia
    }
}