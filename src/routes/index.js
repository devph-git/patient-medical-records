const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Home of Patient Medical Records API.");
});

module.exports = router;
