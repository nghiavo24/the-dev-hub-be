const express = require('express');
const router = express.Router();
const Posting = require('../models/Posting');

router.get('/', (req, res) => {
    Posting.find().then((postings) => res.json(postings));
});

router.get('/:id', async (req, res, next) => {
    try {
        const postingId = await Posting.findById(req.params.id);
        res.json(postingId);
    } catch (err) {
        next(err);
    }
});

