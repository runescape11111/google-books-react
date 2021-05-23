const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .get(booksController.getAll)
    .post(booksController.saveBook);

router.route("/:id")
    .delete(booksController.deleteBook);

module.exports = router;