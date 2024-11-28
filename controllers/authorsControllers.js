const { getAuthors, getAuthorById } = require("../db");
const path = require("path");

async function getAuthorsController(req, res) {
  const authors = await getAuthors();
  const viewDir = path.join(__dirname, "..", "views");
  console.log(authors);
  res.render(path.join(viewDir, "authors.ejs"), {
    authors,
    links: req.app.locals.links,
  });
}

async function getAuthorByIdController(req, res) {
  const author = await getAuthorById(req.params.id);
  const viewDir = path.join(__dirname, "..", "views");

  res.render(path.join(viewDir, "author-info.ejs"), {
    author,
    links: req.app.locals.links,
  });
}

module.exports = { getAuthorsController, getAuthorByIdController };
