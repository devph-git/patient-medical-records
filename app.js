const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT | process.env.port, () => {
  console.log(`PMR-0 running at port ${PORT}`);
});
