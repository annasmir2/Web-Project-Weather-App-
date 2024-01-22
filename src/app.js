const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const hbs = require("hbs");

const publicpath = path.join(__dirname, "../public");
app.use(express.static(publicpath));

const viewspath = path.join(__dirname, "../template/views");
app.set("view engine", "hbs");
app.set("views", viewspath);

const partialspath = path.join(__dirname, "../template/partials");
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Listening to the ${port}`);
});
