const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { USER_LEVEL } = require("../constants/accessLevel");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,

  accessLevel: {
    type: Number,
    default: USER_LEVEL,
  },
});

module.exports = mongoose.model("User", userSchema);
