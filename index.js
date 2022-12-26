const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'))
})