const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//npm install nodemon -D --> run server mesmo que haja mudanças, apenas no ambiente de DEV
//npm start - to run nodemon script
//npm install knex
//npm install sqlite3
//npx knex init --> executar um pacote

/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informaçã no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etx
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

// app.post('/users', (request, response) => {
//     // const Params = request.query; //Query Params
//     // const Params = request.params; //Route Params
//     const body = request.body;

//     console.log(body);
//     // return response.send('Hello World!')
//     return response.json({
//         "evento": "Semana OmniStack 11.0",
//         "aluno": "Wesley"
//     })
// })


// app.post('/users', (request, response) => {
//     // return response.send('Hello World!')
//     return response.json({"evento":"Semana OmniStack 11.0",
//                           "aluno":"Wes"})
// })


