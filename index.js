const express = require('express')
const cors = require('cors')
const middleware = require('./middleware/index')

const mongoose = require('mongoose')
const app = express()

app.use(middleware.decodeToken);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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