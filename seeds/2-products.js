exports.seed = (knex, Promise) => {
  return knex('products').insert([
    {
      id: 0,
      category: 'Provisional Sum',
      name: 'Building Consent',
      price: '$0,000.00',
      url: 'img/products',
    }
  ])
}
