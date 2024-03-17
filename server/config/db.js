const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.db;

const databaseConnection = mongoose
  .connect(db)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("Database is not connected");
    console.log(err);
  });

module.exports = databaseConnection;
