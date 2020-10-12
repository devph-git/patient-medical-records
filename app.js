require("dotenv").config();
const express = require("express");

const connectDB = require("./src/models/index.js");
const IndexRoute = require("./src/routes/index.js");

const app = express();

const localPort = process.env.LOCAL_PORT;

app.use(IndexRoute);
server();

function server() {
  try {
    //start server
    app.listen(localPort || process.env.PORT, async () => {
      console.log(`PMR-0 running at port ${localPort}`);
    });

    //connect MongoDB
    connectDB();
  } catch (e) {
    console.error(e);
  }
}



module.exports = {
  server,
};
