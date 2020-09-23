const mongoose = require("mongoose");

module.exports = function connectDB() {
  mongoose.connect(
    process.env.DB_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log(`now connected to MongoDB`);
    }
  );
};
