const express = require('express');
const router = express.Router();

const Application = require('../models/Applications');
const Note = require('../models/Note');

router.get('/application', async (req, res, next) => {
    try {
        const applications = await Application.find({})
        res.json(applications)
    } catch(err) {
        next(err)
    }
})

router.get('/application/:id', async (req, res, next) => {
    try {
        const application = await Application.findById(req.params.id)
        res.json(application)
    } catch(err) {
        next(err)
    }
})

router.post('/application/add', async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body)
        res.status(201).json(newApplication)
    } catch(err) {
        next(err)
    }
})

router.put('/application/edit/:id', async (req, res, next) => {
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

router.delete('/application/delete/:id', async (req, res, next) => {
    try {
        const deleteApplication = await Application.findByIdAndDelete(req.params.id)
        const deleteNotes = await Note.deleteMany({application: req.params.id})
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