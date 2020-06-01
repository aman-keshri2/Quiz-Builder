const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true, unique: true },
  choices: {
    type: [String],
    required: true,
  },
  correctAnsIndex: {
    type: Number,
    required: true,
  },
  ansDescription: String,

  tag: String,
  isEnable: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Question", questionSchema);
