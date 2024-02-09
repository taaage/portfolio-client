import express from "express";

const app = express();
const port = 6969;

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
