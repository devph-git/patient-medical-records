const express = require("express");
const IndexRouter = express.Router();

IndexRouter.get("/", async (req, res) => {
  res.status(200).send("Home of Patient Medical Records API.");
});

module.exports = IndexRouter;
