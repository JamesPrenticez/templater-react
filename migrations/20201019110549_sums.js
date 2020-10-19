exports.up = (knex, Promise) => {
    return knex.schema.createTable('sums', (table) => {
    table.increments('id').primary()

    table.integer('job_id')
    table.foreign('job_id').references('jobs.id')
    
    table.string('cost')
    table.string('deposit')
    table.string('balance')
    table.string('buildingConsent')

    table.string('excavation')
    table.string('hardfill')
    table.string('drainage')

    table.string('carpet')
    table.string('vinyl')
    table.string('tiles')

    table.string('kitchen')
    table.string('wardrobes')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('sums')
};