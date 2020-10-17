  
exports.up = (knex, Promise) => {
    return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('client')
    table.string('jname')
    table.string('jnumber')
    table.string('lot')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('jobs')
};