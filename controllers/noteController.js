const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

router.get("/note", async (req, res, next) => {
    try{
        const notes = await Note.find({});
        res.json(notes);
    } catch(err){
        next(err);
    }
})

router.get("/note/:id", async (req, res, next) => {
    try{
        const notes = await Note.find({application: req.params.id});
        res.json(notes);
    } catch(err){
        next(err);
    }
})

router.post("/note/create/:id", async (req, res, next) =>{
    try{
        req.body.application = req.params.id;
        const newNote = await Note.create(req.body);
        res.status(201).json(newNote);
    } catch(err){
        next(err)
    }
})

router.delete("/note/delete/:id", async (req, res, next) =>{
    try{
        const deleteNote = await Note.findOneAndDelete({_id: req.params.id})
        .then((note) => {res.sendStatus(202)})
    } catch(err) {
        next(err)
    }
});

module.exports = router