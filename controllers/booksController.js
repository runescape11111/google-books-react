const Book = require("../models/Book");

const booksController = {
    getAll: function (req,res) {
        Book.find(req.query)
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },

    saveBook: function (req,res) {
        Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => console.log(err));
    },

    deleteBook: function (req,res) {
        Book.findById({id: req.params.id})
            .then(book => book.remove())
            .catch(err => res.status(422).json(err));
    }
}

module.exports = booksController;