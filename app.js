const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

//set directory for static files
app.use(express.static("public"));

//set global variable for views directory
app.set("views", "./views");

const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");

// Define routes
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/", indexRouter);

// Define 404 route
app.use("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

// Define ports
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`My first Express app - listening on ${PORT}`);
});
