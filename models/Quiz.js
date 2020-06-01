const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  description: {
    type: String,
    unique: true,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],

  instruction: String,
  isEnable: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
