const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router

//GET Jobs 
router.get('/api/v1/jobs', (req, res) => {
  db.getJobs()
    .then(jobs => res.json({jobs: jobs}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})

//ADD Job
router.post('/api/v1/jobs', (req, res) => {
  let {jobName, clientName} = req.body
    db.createJob({jobName, clientName})
    .then((ids) => {
      res.status(201).json({ id: ids[0] })
    })
})

//DELETE Job
router.delete('/api/v1/jobs/:id', (req, res) => {
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

//UPDATE Task
router.patch('/api/v1/jobs/:id', (req, res) => {
  let {id} = req.params
  if (!id) return res.status(400).send('no id specified')

  db.updateJob(Number(id), req.body.jobName)
    .then(recordsUpdated => {
      res.sendStatus(200)
    })
    .catch(error => {
      res.sendStatus(500)
    })
})