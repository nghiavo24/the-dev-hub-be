const mongoose = require('./connection');

const Application = require('../models/Applications');
const Posting = require('../models/Posting');

const applicationData =require('./data/applicationRaw.json');
const postingData = require('./data/postingRaw.json');

Application.deleteMany({})
    .then(() => { Application.create(applicationData)
      .then(application => { 
        console.log(application)
      })
    })

Posting.deleteMany({})
    .then(() => { Posting.create(postingData)
      .then(posting => { 
        console.log(posting)
      })
    .finally(process.exit)
    })

  module.exports = mongoose;