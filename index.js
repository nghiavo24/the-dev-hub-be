const express = require('express')
const cors = require('cors')
const middleware = require('./middleware/index')

const mongoose = require('mongoose')
const app = express()

const corsOptions = {
    origin: true,
    credentials: true
  }
app.options('*', cors(corsOptions)); // preflight OPTIONS; put before other routes
app.use(middleware.decodeToken);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.redirect('/api/thedevhub')
})

const applicationController = require('./controllers/applicationController');
app.use('/api/thedevhub', applicationController)

const postingController = require('./controllers/postingController');
app.use('/api/thedevhub', postingController)

const noteController = require('./controllers/noteController');
app.use('/api/thedevhub', noteController)

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app