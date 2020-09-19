const express = require("express");
const app = express();
const PORT = 3000;

const IndexRouter = require("./routes/index.js");

app.use(IndexRouter);

app.listen(PORT | process.env.port, async () => {
  console.log(`PMR-0 running at port ${PORT}`);
});
