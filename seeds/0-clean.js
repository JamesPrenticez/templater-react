exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('jobs')()
  .then(empty('products-preliminary'))
  .then(empty('products-envelope'))
  .then(empty('products-interior'))
  .then(empty('products-services'))
  .then(empty('products-siteworks'))
  .then(empty('selections-preliminary'))
  .then(empty('selections-envelope'))
  .then(empty('selections-interior'))
  .then(empty('selections-services'))
  .then(empty('selections-siteworks'))
  .then(empty('sums'))
  .then(empty('letter'))
}