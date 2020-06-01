const Quiz = require("../models/Quiz");

exports.getQuiz = async (req, res) => {
  // get the current Quiz object
  try {
    let currentQuiz = await Quiz.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: currentQuiz,
    });
  } catch (error) {
    res.status(404).json({
      status: "failure",
      message: "Sorry  not found",
    });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
 
    const quizzes = await Quiz.find({ isEnable: 1 }).sort({ startTime: -1 });
    console.log(quizzes);
    res.status(200).json({
      status: "success",
      data: quizzes,
    });
  } catch (error) {
    console.log(error);
 
    res.status(404).json({
      status: "failure",
      message: "Sorry  not found",
    });
  }
};

exports.getQuestion = async (req, res) => {
  // get the current Quiz object
  try {
    let accesslevel = req.headers["accesslevel"];
    let currentQuiz = await Quiz.findById(req.params.id).populate([
      {
        path: "questions",
        model: "Question",
      },
    ]);

    const currentTime = new Date().getTime();
    const quizStartTime = new Date(currentQuiz.startTime).getTime();

    if (currentTime < quizStartTime && accesslevel !== "admin") {
      res.status(401).json({
        status: "accessdenied",
        data: "You do not have required access ",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: currentQuiz.questions,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failure",
      message: "Sorry  not found",
    });
  }
};
