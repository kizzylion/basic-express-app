const { Router } = require("express");
const indexRouter = Router();
const path = require("path");

indexRouter.get("/", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.render(path.join(viewsDir, "index.ejs"), {
    links: req.app.locals.links,
  });
});

indexRouter.get("/about", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.render(path.join(viewsDir, "about.ejs"), {
    links: req.app.locals.links,
  });
});

indexRouter.get("/contact", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.render(path.join(viewsDir, "contact.ejs"), {
    links: req.app.locals.links,
  });
});

module.exports = indexRouter;
