exports.seed = (knex, Promise) => {
  return knex('selections-interior').insert([
    {
      id: 0,
      job_id: '0',
      category: 'interior',
      name: '',
      description: '',
      options: '',
      yesNo: true,
      value: 0
    }
  ])
}

