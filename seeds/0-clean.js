exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('jobs')()
  .then(empty('products'))
  .then(empty('sums'))
  .then(empty('letter'))
}