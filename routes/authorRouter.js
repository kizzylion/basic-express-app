const { Router } = require("express");
const authorRouter = Router();
const {
  getAuthorsController,
  getAuthorByIdController,
} = require("../controllers/authorsControllers");

authorRouter.get("/", getAuthorsController);

authorRouter.get("/:id", getAuthorByIdController);

module.exports = authorRouter;
