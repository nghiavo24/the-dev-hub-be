const express = require('express')
const cors = require('cors')
const middleware = require('./src/middleware/index');

const mongoose = require('mongoose')
const app = express()
app.set('port', process.env.PORT || 8080)

app.use(middleware.decodeToken);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.redirect('/thedevhub')
})

const applicationController = require('./controllers/applicationController');
app.use('/thedevhub', applicationController)

const postingController = require('./controllers/postingController');
app.use('/thedevhub', postingController)

const noteController = require('./controllers/noteController');
app.use('/thedevhub', noteController)

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});