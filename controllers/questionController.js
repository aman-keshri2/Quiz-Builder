const Question = require("../models/Question");

exports.addQuestions = async (req, res) => {
  try {
    console.log(req.headers);
    let accesslevel = req.headers["accesslevel"];

    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      const questions = await Question.collection.insertMany(req.body);
      console.log(questions);
      res.status(201).json({
        status: "success",
        message: "All ids of questions inserted",
        data: questions.insertedIds,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.editQuestion = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];
    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      const updatedquestion = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: "success",
        data: updatedquestion,
      });
    }
  } catch (e) {
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];
    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      const deletedquestion = await Question.findByIdAndDelete(req.params.id);
      console.log(deletedquestion);
      res.status(204).json({
        status: "success",
        data: null,
      });
    }
  } catch (e) {
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.getQuestion = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];
    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      let currentQuestion = await Question.findById(req.params.id);

      res.status(200).json({
        status: "success",
        data: currentQuestion,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failure",
      message: "Sorry  not found",
    });
  }
};
