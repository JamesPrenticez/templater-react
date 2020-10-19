exports.up = (knex, Promise) => {
    return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('client')
    table.string('jobName')
    table.string('jobNumber')
    table.string('siteAddress')
    table.string('lotNumber')
    table.string('gfa')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('jobs')
};