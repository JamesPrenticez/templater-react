exports.seed = (knex, Promise) => {
  return knex('jobs').insert([
    {
      id: 0, client: 'Client 000', jname: 'The Meadows', jnumber: '000', lot: 'DP13578',
    },
    {
          id: 1, client: 'Client 001', jname: 'The Estate', jnumber: '001', lot: 'DP56468',
    },
    { 
        id: 2, client: 'Client 002', jname: 'The Valley', jnumber: '002', lot: 'DP96548',
    }
  ])
}

