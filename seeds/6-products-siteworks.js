exports.seed = (knex, Promise) => {
  return knex('products-siteworks').insert([
    {
      id: 0,
      category: '',
      name: '',
      price: '$/m2',
      image: 'img/products/siteworks',
    }
  ])
}
