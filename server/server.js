const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors')

const server = express()

const jobsRoutes = require('./routes/jobs')
const productRoutes = require('./routes/products')
const catchAll = require('./routes/catchAll')

// Middle ware
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())
server.use(fileUpload())

module.exports = server

// Routes
server.use('/', productRoutes)
server.use('/', jobsRoutes)
server.use('/', catchAll)

