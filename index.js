const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
const app = express()
app.set('port', process.env.PORT || 8080)


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




app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'))
})