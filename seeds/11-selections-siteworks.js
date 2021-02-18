exports.seed = (knex, Promise) => {
  return knex('selections-siteworks').insert([
    {
      id: 0,
      job_id: '0',
      category: 'siteworks',
      name: '',
      description: '',
      options: '',
      yesNo: true,
      value: 0
    }
  ])
}