
exports.up = function(knex) {
    return  knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};


//npx knex migrate:make create_incidents 
//npx knex migrate:latest

//npx knex --> para consultar todos os comandos
//npx knex migrate:rollback --> para desfazer a ultima alteração
//npx knex migrate:status --> para consultar todas as migrates rodadas