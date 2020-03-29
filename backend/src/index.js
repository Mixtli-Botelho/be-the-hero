const express = require('express') // Importação do módulo/micro framework "Express"
const cors = require('cors') // Importação do módulo de segurança "CORS" (Cross-Origin Resource Sharing - Compartilhamento de Recursos com Origens Diferentes) Determina quem acessa essa aplicação
const routes = require('./routes.js')

const app = express() // app => Objeto que será a aplicação

app.use(cors())
app.use(express.json()) // Para o "Express" entender o formato ".json" e converter em um objeto de "Javascript"
app.use(routes) // Para a aplicação acessar as rotas

app.listen(3333) // O método listen() define a porta da aplicação



// Lembretes para o estudo:

/*  Rota e Rescurso:
    
    Rota => endereço inteiro            ex: http://localhost:3333/users
    Recurso => o que vem depois da '/'  ex: /users
*/

/*  Métodos HTTP:
    
    get() => Buscar/Listar uma informação do back-end (Quando o browser acessa uma rota, ele executa o método "get()")
    post() => Criar uma informação no back-end
    put() => Alterar uma informaçao no back-end
    delete() => Deletar uma informação no back-end
*/

/*  Tipos de parâmetros dos métodos HTTP:
    
    Query Params => Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params => Parâmetros utilizados para identificar "Recursos"   ex: /users/1    "1" => é o "ID" do usuário (/users/:id)
    Request Body => Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*  Request e Response:
    request => Guarda todos os dados da nossa requisição (Em formato de objeto)
        request.query => "Query Params"
        request.params => "Route Params"
        request.body => "Request Body"

    response => Guarda a resposta da nossa requisição
*/

/*  Banco de Dados:
    
    Relacionais => SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NÃO Relacionais => NoSQL: MongoDB, CounchDB, etc

    3 Principais formas de fomunicação com o banco de dados:

    Driver: SELECT * FROM users => (Forma/Sintaxe nativa, pacote oficial do BD)
    Query Builder: table('users').select('*').where() => (Utiliza a sintaxe do Javascript)
*/