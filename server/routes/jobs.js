  
const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get jobs and display on main page
router.get('/api/jobs', (req, res) => {
  db.getJobs()
    .then(jobs => res.json({jobs: jobs}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})