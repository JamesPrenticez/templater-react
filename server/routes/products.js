const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router


//GET Products 
router.get('/api/v1/products', (req, res) => {
    db.getProducts()
      .then(products => res.json({products: products}))
      .catch(err => {
          res.status(500).send('something went wrong')
    })
  })

//ADD img - need to change route
router.post('/api/v1/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    // __dirname gives us - C:\Users\JamesPrentice\GitHub\templater-react\server\routes\
    //  myFile.mv(`${__dirname}/public/img/products${myFile.name}`, function (err) {
    myFile.mv(`C:/Users/JamesPrentice/GitHub/templater-react/server/public/img/products/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})