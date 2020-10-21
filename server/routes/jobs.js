  
const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//GET Jobs 
router.get('/api/jobs', (req, res) => {
  db.getJobs()
    .then(jobs => res.json({jobs: jobs}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})

//ADD Job
router.post('/api/jobs', (req, res) => {
  let {jobName} = req.body
      db.createJob({jobName})
          .then((ids) => {
              res.status(201).json({id: ids[0]})//broken?
          })
})

//DELETE Job
router.delete('/api/jobs/:id', (req, res) => {
  let {id} = req.params
  if (!id) return res.status(400).send('no id specified')
    db.deleteJob(Number(id))
      .then((recordsDeleted) => {
        res.sendStatus(200)
      })
      .catch(error => {
        res.sendStatus(500)
      })
  })
