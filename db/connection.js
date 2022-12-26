const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/thedevhub';

mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, err => {
      if(err) throw err;
      console.log(`Connected to Mongo 🚀 at ${mongoURI}`)
    })

module.exports = mongoose