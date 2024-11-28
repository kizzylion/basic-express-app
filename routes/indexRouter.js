const { Router } = require("express");
const indexRouter = Router();
const path = require("path");

indexRouter.get("/", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.sendFile(path.join(viewsDir, "index.html"));
});

indexRouter.get("/about", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.sendFile(path.join(viewsDir, "about.html"));
});

indexRouter.get("/contact", (req, res) => {
  const viewsDir = path.join(__dirname, "..", "views");
  res.sendFile(path.join(viewsDir, "contact.html"));
});

module.exports = indexRouter;
