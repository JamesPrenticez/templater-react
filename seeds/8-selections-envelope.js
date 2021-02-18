exports.seed = (knex, Promise) => {
  return knex('selections-envelope').insert([
    {
      id: 0,
      job_id: 0,
      category: 'envelope',
      name: '10.0 (a) - Floor System',
      description: 'This contract allows for ',
      options: JSON.stringify([
        '3604 Concrete floor system',
        'Firth RibRaft floor system',
        'Timber floor and pile system',
        'the ground floor to be Firth RibRaft floor system and a suspended timber mid-floor'
      ]),
      yesNo: true,
      value: 0,
    },
    {
      id: 1,
      job_id: 0,
      category: 'envelope',
      name: '10.0 (b) - Floor System',
      description: JSON.stringify([
        'This is a reinforced concrete waffle raft floor slab consisting of a grid of concrete thickenings (ribs) and polystyrene pods (rafts)',
        'The perimeter edge of the foundation will be boxed and left fairface finished - not plastered or painted'
      ]),
      options: '',
      yesNo: true,
      value: 0,
    },
    {
      id: 2,
      job_id: 0,
      category: 'envelope',
      name: '10.0 (c) - Floor System',
      description: JSON.stringify([
        'The perimeter edge of the foundation will be boxed and left fairface finished - not plastered or painted'
      ]),
      options: '',
      yesNo: true,
      value: 0,
    },
    {
      id: 3,
      job_id: 0,
      category: 'envelope',
      name: '10.0 (d) - Floor System',
      description: JSON.stringify([
        'The perimeter edge of the foundation will be boxed and left fairface finished - not plastered or painted'
      ]),
      options: '',
      yesNo: true,
      value: 0,
    },
    {
      id: 4,
      job_id: 0,
      category: 'envelope',
      name: '11.0 (a) - Framing',
      description: JSON.stringify([
        'Floor Slab will be 85mm thick concrete reinforced with 615-500E ductile mesh'
      ]),
      options: JSON.stringify([
      'Radiata kiln dried 90 x 45 H1.2 treated timber',
      'Radiata kiln dried 90 x 45 and 140 x 45 H1.2 treated timber',
      ]),
      yesNo: true,
      value: 0,
    },
    {
      id: 5,
      job_id: 0,
      category: 'envelope',
      name: '11.0 (b) - Framing',
      description: 'All Trusses shall be ',
      options: JSON.stringify([
      'Radiata Pine, kiln dried, gang nail with 10 degree pitch',
      'Radiata Pine, kiln dried, gang nail with 25 degree pitch',
      'Radiata Pine, kiln dried, gang nail with 35 degree pitch',
      ]),
      yesNo: true,
      value: 0,
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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


