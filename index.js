const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

// creating routes
app.get("/migrate-service-name", (req, res) => {
  res.send("AWS Lambda equivalent service in IBM Cloud is Code Engine");
});

app.post("/eq-service-name", (req, res) => {
  const { name } = req.body;
  res.json(`Hello the ${name} equivalent service in ibm cloud is Code Engine`);
});

module.exports.handler = serverless(app);
