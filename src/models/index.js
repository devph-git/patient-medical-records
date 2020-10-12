const mongoose = require("mongoose");

module.exports = async function connectDB() {
  mongoose.connect(
    process.env.DB_URL,
    {
      dbName: "testing101",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log(`now connected to MongoDB`);
    }
  );
};
