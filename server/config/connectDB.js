const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const con = mongoose.connection;

    con.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    con.on("error", (error) => {
      console.log("Error connecting to the MongoDB", error);
    });
  } catch (error) {
    console.log("Error in DB", error)
  }
}

module.exports = connectDB