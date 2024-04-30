const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

// creating routes
app.get("/hello", (req, res) => {
  res.send("Hello world!");
});

app.post("/hello", (req, res) => {
  const { name } = req.body;

  res.json(`Hello there ${name}!`);
});

// const PORT = 8080;

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT: ${PORT}`);
// });


module.exports.handler = serverless(app);