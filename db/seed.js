const mongoose = require('./connection');

const Application = require('../models/Applications');
const Posting = require('../models/Posting');

const applicationData =require('./data/applicationRaw.json');
const postingData = require('./data/postingRaw.json');

Posting.deleteMany()
  .then(() => Posting.insertMany(postingData))
  .then(console.log)
  .catch(console.error)
  .finally(process.exit);

Application.deleteMany()
  .then(() => Application.insertMany(applicationData))
  .then(console.log)
  .catch(console.error)
  .finally(process.exit);

  module.exports = mongoose;