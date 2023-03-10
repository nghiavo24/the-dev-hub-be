const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const PostingSchema = new Schema(
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
        posted:String,
        url: String,
        note: String,
    }
)

module.exports = mongoose.model('Posting', PostingSchema)