const path = require('path')
const express = require('express')

const server = express()

const jobsRoutes = require('./routes/jobs')
const catchAll = require('./routes/catchAll')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', jobsRoutes)
server.use('/', catchAll)

