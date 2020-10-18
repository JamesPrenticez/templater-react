exports.seed = (knex, Promise) => {
  return knex('jobs').insert([
    {
      id: 0, client: 'Bob & Mary', jobName: 'The Meadows', jobNumber: '000', siteAddress: '123 Street', lotNumber: 'DP13578', gfa: '178.94m2',
    },
    {
      id: 1, client: 'Alex & Charlotte', jobName: 'The Estate', jobNumber: '001', siteAddress: '123 Street', lotNumber: 'DP56468', gfa: '150m2',
    },
    { 
      id: 2, client: 'James & Lucy', jobName: 'The Valley', jobNumber: '002', siteAddress: '123 Street', lotNumber: 'DP96548', gfa: '250m2',
    }
  ])
}




