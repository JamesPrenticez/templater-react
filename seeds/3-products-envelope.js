exports.seed = (knex, Promise) => {
  return knex('products-envelope').insert([
    {
      id: 0,
      category: 'Floor System',
      name: 'Ribraft Floor',
      price: '$/m2',
      image: 'img/products/envelope/floor/ribraft.png',
    },
    {
      id: 1,
      category: 'Framing',
      name: 'Timber Framing',
      price: '$/m2',
      image: 'img/products/envelope/frame/timber_framing.png',
    },
    {
      id: 2,
      category: 'Cladding',
      name: 'Rockcote',
      price: '$/m2',
      image: 'img/products/envelope/cladding/rockcote.png',
    },
    {
      id: 3,
      category: 'Cladding',
      name: 'Brick',
      price: '$/m2',
      image: 'img/products/envelope/cladding/brick.png',
    },
    {
      id: 4,
      category: 'Cladding',
      name: 'Horizonal Linea Weatherboard',
      price: '$/m2',
      image: 'img/products/envelope/cladding/linea.png',
    },
    {
      id: 5,
      category: 'Cladding',
      name: 'Vertical Linea Oblique Weatherboard',
      price: '$/m2',
      image: 'img/products/envelope/cladding/oblique.png',
    },
    {
      id: 6,
      category: 'Cladding',
      name: 'Horizontal Cedar Weatherboard',
      price: '$/m2',
      image: 'img/products/envelope/cladding/horizontal_cedar.png',
    },
    {
      id: 7,
      category: 'Cladding',
      name: 'Vertical Cedar Weatherboard',
      price: '$/m2',
      image: 'img/products/envelope/cladding/vertical_cedar.png',
    },
    {
      id: 8,
      category: 'Cladding',
      name: 'Schist',
      price: '$/m2',
      image: 'img/products/envelope/cladding/schist.png',
    },
  ])
}
