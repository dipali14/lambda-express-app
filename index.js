const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(express.json());

// creating routes
app.get("/hackathon-purpose", (req, res) => {
  res.send("LLM based cloud code migrator agent from Vendor locked-in service.");
});

app.post("/eq-service-name", (req, res) => {
  const { name } = req.body;
  res.json(`Hello the ${name} equivalent service in ibm cloud is Code Engine`);
});

module.exports.handler = serverless(app);
