exports.up = (knex, Promise) => {
    return knex.schema.createTable('products-envelope', (table) => {
    table.increments('id').primary()
    table.string('category')
    table.string('name')
    table.string('price')
    table.string('image')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('products-envelope')
};
