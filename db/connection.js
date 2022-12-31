const mongoose = require('mongoose');
require('dotenv').config();

let mongoURI = ""
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/thedevhub";
}
mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, err => {
      if(err) throw err;
      console.log(`Connected to Mongo 🚀 at ${mongoURI}`)
    })

module.exports = mongoose