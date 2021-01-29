exports.seed = (knex, Promise) => {
  return knex('jobs').insert([
    {
      id: 0,
      date_created: new Date(Date.now()),
      jobName: 'Alexandra',
      clientName: 'John Doe',
      siteAddress: '01 Fake Street',
      suburb: 'Southern Series',
      lotNumber: 'Lot 01',
      jobNumber: 'SS01',
      gfa: "170.69m2",
      salesPerson: 'Standard Pricing'
    },
  ])
}




