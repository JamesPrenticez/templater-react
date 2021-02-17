exports.seed = (knex, Promise) => {
  return knex('products-preliminary').insert([
    {
      id: 0,
      category: '',
      name: '',
      price: '',
      image: 'img/products/prelininary/',
    }
  ])
}
