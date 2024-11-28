const { getBooks, getBookById, getAuthorById } = require("../db");
const path = require("path");

const booksControllers = {
  getAuthorById,
  getBooksController,
  getBookByIdController,
  reserveBookController,
};

async function getBooksController(req, res) {
  const books = await getBooks();
  const viewDir = path.join(__dirname, "..", "views");
  res.render(path.join(viewDir, "books.ejs"), {
    books,
    links: req.app.locals.links,
  });
}

async function getBookByIdController(req, res) {
  const book = await getBookById(req.params.id);
  const author = await getAuthorById(book.authorId);
  const viewDir = path.join(__dirname, "..", "views");
  res.render(path.join(viewDir, "book-detail.ejs"), {
    book,
    author,
    links: req.app.locals.links,
  });
}

async function reserveBookController(req, res) {
  const book = await getBookById(req.params.id);
  const author = await getAuthorById(book.authorId);
  const viewDir = path.join(__dirname, "..", "views");

  res.render(path.join(viewDir, "book-reserve.ejs"), {
    book,
    author,
    links: req.app.locals.links,
  });
}

module.exports = booksControllers;
