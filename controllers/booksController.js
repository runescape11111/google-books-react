const db = require("../models/Book");

const booksController = {
    getAll: function (req,res) {
        db.find(req.query)
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },

    saveBook: function (req,res) {
        db.create(req.body)
            .then(book => res.json(book))
            .catch(err => console.log(err));
    },

    deleteBook: function (req,res) {
        db.findById({id: req.params.id})
            .then(book => book.remove())
            .catch(err => res.status(422).json(err));
    }
}

module.exports = booksController;