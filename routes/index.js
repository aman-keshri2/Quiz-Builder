const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const quizController = require("../controllers/quizController");
const questionController = require("../controllers/questionController");

router.get("/welcome", (req, res) => {
  res.send("Welcome To Quiz App");
});

//questions route

// add question
router.post("/api/question/new", questionController.addQuestions);

// edit question
router.patch("/api/question/edit/:id", questionController.editQuestion);

// delete question
router.delete("/api/question/delete/:id", questionController.deleteQuestion);

// // get questions by tags
// router.get("/api/question/find/:tag", questionController.getByTag);

// get question by id
router.get("/api/question/get/:id", questionController.getQuestion);

// quiz routes

//get any quiz
router.get("/api/quiz/get/:id", quizController.getQuiz);

//get All quizzes
router.get("/api/quiz/allquizzes", quizController.getQuizzes);

//get all questions for a Quiz
router.get("/api/quiz/questions/:id", quizController.getQuestion);

//Admin Routes

//ADD quiz
router.post("/api/admin/quiz/new", adminController.addQuiz);

//Edit Quiz
router.patch("/api/admin/quiz/edit/:id", adminController.editQuiz);

// Delete Quiz
router.delete("/api/admin/quiz/delete/:id", adminController.deleteQuiz);

// Add question to a Quiz
router.patch(
  "/api/admin/quiz/add/:quizid/:quesid",
  adminController.enableQuestion
);

// Disable Question in existing quiz
router.patch(
  "/api/admin/quiz/disable/:quizid/:quesid",
  adminController.disableQuestion
);
//Enable Question in a quiz
router.patch(
  "/api/admin/quiz/enable/:quizid/:quesid",
  adminController.enableQuestion
);

module.exports = router;
