  
const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get Jobs and display on main page
router.get('/api/jobs', (req, res) => {
  db.getJobs()
    .then(jobs => res.json({jobs: jobs}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})

//Add Job
router.post('/api/jobs', (req, res) => {
  let {jobName} = req.body
      db.createJob({jobName})
          .then((ids) => {
              res.status(201).json({id: ids[0]})//broken?
          })
})

