exports.up = (knex, Promise) => {
    return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('type')
    table.string('name')
    table.string('code')
    table.string('price')
    table.string('url')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('products')
};
