const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength: 100, 
        },
        company: {
            type: String,
            required: true,
            maxLength: 50
        },
        applied:{
            type: String,
        },
        hiring_manager:{
            type: String,
            maxLength: 50
        },
        compensation: Number,
        work_site: {
            type: String,
            maxLength: 50
        },
        location: {
            type: String,
            maxLength: 50 
        },
        url: String
    }
)

module.exports = mongoose.model('Application', ApplicationSchema)