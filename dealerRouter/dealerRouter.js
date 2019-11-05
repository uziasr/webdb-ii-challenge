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

router.put('/:id', (req,res)=>{
    knex('cars')
    .where('id', '=', req.params.id)
    .update({vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission_type: req.body.transmission_type,
        title: req.body.title
            })
    .then(car=>{
        res.status(200).json({...req.body})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:'something went wrong'})
    })
})

router.delete('/:id', (req,res)=>{
    console.log(req.params.id)
    knex('cars')
    .where({id: req.params.id})
    .del()
    .then(accounts=>{
        accounts?res.status(200).json({success:`The user with the ID of ${req.params.id} was deleted`}):res.status(404).json({error:`The ID ${req.params.id} does not exist`})
    })
    .catch(err=>{
        res.status(500).json({error: "something went wrong"})
    })
})

module.exports = router;