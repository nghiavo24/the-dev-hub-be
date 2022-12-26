const express = require('express');
const router = express.Router();
const Posting = require('../models/Posting');

router.get('/', (req, res) => {
    Posting.find().then((postings) => res.json(postings));
});