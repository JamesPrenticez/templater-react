exports.seed = (knex, Promise) => {
  return knex('selections-services').insert([
    {
      id: 0,
      job_id: '0',
      category: 'services',
      name: '',
      description: '',
      options: '',
      yesNo: true,
      value: 0
    }
  ])
}