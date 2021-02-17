exports.seed = (knex, Promise) => {
  return knex('products-interior').insert([
    {
      id: 0,
      category: 'envelope',
      name: 'Ribraft Floor',
      price: '$130/m2',
      image: 'img/products/interior',
    }
  ])
}
