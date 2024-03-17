const { default: mongoose } = require("mongoose");

const dataModel = new mongoose.Schema({
  name: {
    type: String,
    retuired: true,
  },
  email: {
    type: String,
    retuired: true,
  },
  password: {
    type: String,
    retuired: true,
  },
});

const databaseSchema = mongoose.model("users", dataModel);
module.exports = databaseSchema;
