exports.up = (knex, Promise) => {
    return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.date('date_created')
    table.string('img')
    table.string('jobName')
    table.string('collection')
    table.string('client')
    table.string('jobNumber')
    table.string('siteAddress')
    table.string('lotNumber')
    table.string('gfa')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('jobs')
};

