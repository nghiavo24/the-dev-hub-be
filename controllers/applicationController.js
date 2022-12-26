const express = require('express')
const router = express.Router()

const Application = require('../models/Applications')

router.get('/', async (req, res, next) => {
    try {
        const applications = await Application.find({})
        res.json(applications)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const application = await Application.findById(req.params.id)
        res.json(application)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body)
        res.status(201).json(newApplication)
    } catch(err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const udpateApplication = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if(udpateApplication) {
            res.json(udpateApplication)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deleteApplication = await Application.findByIdAndDelete(req.params.id)
        if(deleteApplication) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router