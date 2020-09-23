require("dotenv").config();
const express = require("express");

const connectDB = require("./models/index.js");
const IndexRouter = require("./routes/index.js");

const app = express();

const localPort = process.env.LOCAL_PORT;

app.use(IndexRouter);

(function server() {
  app.listen(localPort || process.env.PORT, async () => {
    console.log(`PMR-0 running at port ${PORT}`);
  });

  connectDB();
})();

module.exports = {
  server,
  connectDB,
};
