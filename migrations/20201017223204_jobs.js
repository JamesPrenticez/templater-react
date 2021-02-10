exports.up = (knex, Promise) => {
    return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.date('dateCreated')
    table.string('jobName')
    table.string('clientName')
    table.string('siteAddress')
    table.string('collection')
    table.string('lotNumber')
    table.string('jobNumber')
    table.string('gfa')
    table.string('cost')
    table.string('salesPerson')
    table.string('imageCover')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('jobs')
};
