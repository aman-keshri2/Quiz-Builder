const Quiz = require("../models/Quiz");
const ObjectId = require("mongodb").ObjectID;

exports.addQuiz = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];
    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      // Create a new quiz
      const newQuiz = await new Quiz({
        startTime: new Date(req.body.startTime),
        endTime: new Date(req.body.endTime),
        questions: req.body.questions,
        description: req.body.description || "",
        instruction: req.body.instruction || "",
      }).save();

      res.status(201).json({
        status: "success",
        data: newQuiz,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.editQuiz = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];

    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      const updatedquiz = await Quiz.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: "success",
        data: updatedquiz,
      });
    }
  } catch (e) {
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];

    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      const deletedquiz = await Quiz.findByIdAndDelete(req.params.id);
      console.log(deletedquiz);
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

exports.disableQuestion = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];

    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      let currentQuiz = await Quiz.findById(req.params.quizid);

      console.log(currentQuiz);
      let allQuestions = currentQuiz.questions.filter((e) => {
      
        let id = JSON.stringify(e);
        let idparsed = JSON.parse(id);
        if (idparsed === req.params.quesid) return false;

        return true;
      });
      let update = { questions: allQuestions };
      const updatedquiz = await Quiz.findByIdAndUpdate(
        req.params.quizid,
        update,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: "success",
        data: updatedquiz,
      });
    }
  } catch (e) {
    
    res.status(404).json({
      status: "failure",
      message: "Sorry something wrong",
    });
  }
};

exports.enableQuestion = async (req, res) => {
  try {
    let accesslevel = req.headers["accesslevel"];

    if (accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      let currentQuiz = await Quiz.findById(req.params.quizid);

      let allQuestions = [
        ...currentQuiz.questions,
        ObjectId(req.params.quesid),
      ];
      let update = { questions: allQuestions };
      const updatedquiz = await Quiz.findByIdAndUpdate(
        req.params.quizid,
        update,
        {
          new: true,
        }
      );

      res.status(200).json({
        status: "success",
        data: updatedquiz,
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
