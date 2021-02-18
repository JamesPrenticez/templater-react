const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router

// ------------------------------------------------------------ SELECTIONS - PRELIMINARY ------------------------------------------------------------
//GET Preliminary
router.get('/api/v1/selections/preliminary', (req, res) => {
  db.getSelectionsPreliminary()
    .then(selectionsPreliminary => res.json({selectionsPreliminary: selectionsPreliminary}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})

//GET Envelope
router.get('/api/v1/selections/envelope', (req, res) => {
  db.getSelectionsEnvelope()
    .then(selectionsEnvelope => res.json({selectionsEnvelope: selectionsEnvelope}))
    .catch(err => {
        res.status(500).send('something went wrong')
  })
})
