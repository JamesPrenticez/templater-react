// return knex.schema.createTable('jobs', (table) => {
//   table.increments('id').primary()
//   table.date('dateCreated')
//   table.string('jobName')
//   table.string('clientName')
//   table.string('siteAddress')
//   table.string('collection')
//   table.string('lotNumber')
//   table.string('jobNumber')
//   table.string('houseType')
//   table.string('gfa')
//   table.string('salesPerson')
//   table.string('imageCover')
//   table.string('budget')
//   table.integer('deposit')
//   table.integer('retailPrice')
//   table.integer('contractPrice')
//   })  
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
      houseType: 'DESIGN/BUILD',
      gfa: '170.69m2',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/alexandra/alexandra.png',
      budget: '400K',
      deposit: 5000,
      retailPrice: 396600.00,
      contractPrice: 396600.00
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
      houseType: 'DESIGN/BUILD',
      gfa: '148.56m2',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/andrew/andrew.png',
      budget: '350K',
      deposit: 5000,
      retailPrice: 347690.00,
      contractPrice: 347690.00
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
      houseType: 'DESIGN/BUILD',
      gfa: '166.12m2',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/anne/anne.png',
      budget: '350K',
      deposit: 5000,
      retailPrice: 386565.00,
      contractPrice: 386565.00
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
      houseType: 'DESIGN/BUILD',
      gfa: '111.08m2',
      salesPerson: 'Standard Pricing',
      imageCover: '../img/houses/catherine/catherine.png',
      budget: '300K',
      deposit: 5000,
      retailPrice: 287079.00,
      contractPrice: 287079.00
    },
  ])
}







