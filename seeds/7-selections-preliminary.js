exports.seed = (knex, Promise) => {
  return knex('selections-preliminary').insert([
    {
      id: 0,
      job_id: 0,
      category: 'preliminary',
      name: '4.0 (e) - Building Consent',
      description: 'Includes a Provisonal Sum of $___ for the building consent fees, BRANZ levy and the department of building housing levy',
      options: '',
      yesNo: true,
      value: 6665.89
    }
  ])
}


