exports.seed = (knex, Promise) => {
  return knex('sums').insert([
    {
      id: 0,
      job_id: 0,
      cost: '$500,000',
      deposit: '$50,000.00',
      balance: '$450,000.00',
      buildingConsent: '$8,000.00',

      excavation: '94.16m3',
      hardfill: '78.90m3',
      drainage: '$5,750.00',

      carpet: '$6,400.00',
      vinyl: '$3,800.00',
      tiles: '$6,733.00',

      kitchen: '$15,000.00',
      wardrobes: '$3,700.00'
    }
  ])
}

