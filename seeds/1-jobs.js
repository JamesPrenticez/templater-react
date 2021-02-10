exports.seed = (knex, Promise) => {
  return knex('jobs').insert([
    {
      id: 0,
      dateCreated: new Date(Date.now()),
      jobName: 'Alexandra',
      clientName: 'Client 01',
      siteAddress: '01 Fake Street',
      collection: 'Southern Series',
      lotNumber: 'Lot 01',
      jobNumber: 'SS01',
      gfa: '170.69m2',
      cost: '$396,600.00',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/alexandra/alexandra.png'
    },
    {
      id: 1,
      dateCreated: new Date(Date.now()),
      jobName: 'Andrew',
      clientName: 'Client 02',
      siteAddress: '02 Fake Street',
      collection: 'Southern Series',
      lotNumber: 'Lot 02',
      jobNumber: 'SS02',
      gfa: '148.56m2',
      cost: '$347,690.00',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/andrew/andrew.png'
    },
    {
      id: 2,
      dateCreated: new Date(Date.now()),
      jobName: 'Anne',
      clientName: 'Client 03',
      siteAddress: '03 Fake Street',
      collection: 'Southern Series',
      lotNumber: 'Lot 03',
      jobNumber: 'SS03',
      gfa: '166.12m2',
      cost: '$386,565.00',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/anne/anne.png'
    },
    {
      id: 3,
      dateCreated: new Date(Date.now()),
      jobName: 'Catherine',
      clientName: 'Client 04',
      siteAddress: '04 Fake Street',
      collection: 'Southern Series',
      lotNumber: 'Lot 04',
      jobNumber: 'SS04',
      gfa: '111.08m2',
      cost: '$287,079.00',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/catherine/catherine.png'
    },
  ])
}







