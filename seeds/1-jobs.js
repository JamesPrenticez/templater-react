exports.seed = (knex, Promise) => {
  return knex('jobss').insert([
    {
      id: 1,
      client: 'Mr and Mrs Vercoe',
      jname: '335 silvedale Lane',
      jnumber: '054',
      lot: 'DP13578',
    }
  ])
}

