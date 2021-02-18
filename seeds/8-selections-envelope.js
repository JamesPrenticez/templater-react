exports.seed = (knex, Promise) => {
  return knex('selections-envelope').insert([
    {
      id: 0,
      job_id: 0,
      category: 'envelope',
      name: '12.0 (a) - Roofing',
      description: JSON.stringify([
        'Roofing shall be ',
        ' installed by a Certified Roofer',
      ]),
      options: JSON.stringify([
        'ColorSteel, Endura, Corrugrate, Long Run Roofing',
        'ColorSteel, Endura, 5 Rib, Long Run Roofing',
        'Gerard Stratos, Satin, Tiled Roofing, with angle trim'
      ]),
      yesNo: true,
      value: 0,
    },
    {
      id: 1,
      job_id: 0,
      category: 'envelope',
      name: '12.0 (b) - Fascia',
      description: 'Fascia and gutter shall be ',
      options: JSON.stringify([
        'ColorSteel, Endura, Fascia and box gutter system',
        'Gerard Roofing, Freeline fascia and Quad gutter system',
      ]),
      yesNo: true,
      value: 0
    },
    {
      id: 2,
      job_id: 0,
      category: 'envelope',
      name: '12.0 (c) - Downpipe',
      description: 'Downpipe shall be ',
      options: JSON.stringify([
        '80mm, ColorSteel round profile painted',
        '80mm, Marley uPVC round profile painted',
        '80mm, Marley uPVC round profile (colour from Stratus range)',
      ]),
      yesNo: true,
      value: 0
    },
  ])
}


