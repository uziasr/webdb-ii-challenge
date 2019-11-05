const express = require('express')

const knex = require('../data/dbConfig')
const router = express.Router()

router.get('/', (req,res)=>{
    knex
    ('cars')
    .then(accounts=>{
        res.json(accounts)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:'something went wrong'})
    })
})

router.post('/', (req,res)=>{
    knex('cars')
    .insert({vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission_type: req.body.transmission_type,
        title: req.body.title
            })
    .then(accounts=>{
        res.status(200).json({...req.body})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: 'something went wrong, make sure a use with this name does not exist'})
    })
})

module.exports = router;