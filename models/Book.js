const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    authors: {type: Array, required: true},
    url: {type: String, required: true},
    img: {type: String, required: true},
    description: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;