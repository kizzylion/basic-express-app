const { Router } = require("express");
const bookRouter = Router(); // { mergeParams: true }

const booksControllers = require("../controllers/booksControllers");

bookRouter.get("/", booksControllers.getBooksController);

bookRouter.get("/:id", booksControllers.getBookByIdController);

bookRouter.get("/:id/reserve", booksControllers.reserveBookController);

module.exports = bookRouter;
