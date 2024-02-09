// routes/products.js
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({ userOne: "userOne", userTwo: "userTwo" }); // this gets executed when user visit http://localhost:3000/products
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
