const { getAuthors, getAuthorById } = require("../db");
const path = require("path");

async function getAuthorsController(req, res) {
  const authors = await getAuthors();
  const viewDir = path.join(__dirname, "..", "views");
  console.log(authors);
  res.sendFile(path.join(viewDir, "authors.html"));
}

async function getAuthorByIdController(req, res) {
  const author = await getAuthorById(req.params.id);
  const viewDir = path.join(__dirname, "..", "views");
  console.log("Author: ", author);
  res.sendFile(path.join(viewDir, "author-info.html"));
}

module.exports = { getAuthorsController, getAuthorByIdController };
