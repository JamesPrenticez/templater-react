exports.seed = (knex, Promise) => {
  return knex('products-services').insert([
    {
      id: 0,
      category: 'envelope',
      name: 'Ribraft Floor',
      price: '$130/m2',
      image: 'img/products/services',
    }
  ])
}
