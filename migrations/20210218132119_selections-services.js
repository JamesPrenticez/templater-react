exports.up = (knex, Promise) => {
    return knex.schema.createTable('selections-services', (table) => {
        table.increments('id').primary()
        table.integer('job_id')
        table.string('category')
        table.string('name')
        table.string('description')
        table.string('options')
        table.boolean('yesNo')
        table.text('words')
        table.integer('value')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('selections-services')
};
