const { getBooks, getBookById } = require("../db");
const path = require("path");

const booksControllers = {
  getBooksController,
  getBookByIdController,
  reserveBookController,
};

async function getBooksController(req, res) {
  const books = await getBooks();
  const viewDir = path.join(__dirname, "..", "views");
  console.log(books);
  res.sendFile(path.join(viewDir, "books.html"));
}

async function getBookByIdController(req, res) {
  const book = await getBookById(req.params.id);
  const viewDir = path.join(__dirname, "..", "views");
  console.log("Book: ", book);
  res.sendFile(path.join(viewDir, "book-detail.html"));
}

async function reserveBookController(req, res) {
  const book = await getBookById(req.params.id);
  const viewDir = path.join(__dirname, "..", "views");
  console.log("Book: ", book);
  res.sendFile(path.join(viewDir, "book-reserve.html"));
}

module.exports = booksControllers;
