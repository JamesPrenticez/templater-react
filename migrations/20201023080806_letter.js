exports.up = (knex) => {
    return knex.schema.createTable('letter', (table) => {
      table.increments().primary()
      table.integer('comment_count').defaultsTo(0)
      table.integer('number')
      table.string('title')
      table.string('paragraphs')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('letter')
  }