exports.seed = (knex, Promise) => {
  return knex('products').insert([
    {
      id: 0,
      type: 'Provisional Sum',
      name: 'Building Consent',
      code: '123',
      price: '$0,000.00',
      url: 'img/test',
    }
  ])
}
