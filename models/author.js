const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('author', authorSchema)