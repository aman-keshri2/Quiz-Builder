import React, { Component } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import DateAndTimePickers from "./DateInput";

import Question from "./Question";
export default class CreateQuiz extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {}

  addQuestion = () => {
    let questions = [];
    questions = [...this.state.questions];
    let index = questions.length;
    questions.push(<Question index={index} />);
    this.setState({
      questions,
    });
  };

  createQuiz = () => {
    this.props.history.push("/AdminDashboard");
  };

  render() {
    return (
      <div style={{ width: "100%", marginBottom: "10px" }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          style={{ width: "50%", marginTop: "50px", margin: "auto" }}
        >
          <h2>Create Quiz</h2>
          <TextField
            id="filled-with-placeholder"
            label="Quiz Description"
            placeholder="QuizDescription"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.myChangeHandler}
            name="quizDescription"
          />

          <DateAndTimePickers label="Start Time" />
          <DateAndTimePickers label="End Time" />
          <TextField
            id="filled-with-placeholder"
            label="Instruction"
            placeholder="Instruction"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.myChangeHandler}
            name="Instruction"
          />

          {this.state.questions}

          <Button
            style={{ marginTop: "20px", width: "400px" }}
            variant="contained"
            onClick={this.addQuestion}
            color="secondary"
          >
            Add Question
          </Button>
        </Box>
        <Box style={{ width: "100%" }} display="flex" justifyContent="center">
          <Button
            style={{ marginTop: "20px", width: "50%" }}
            variant="contained"
            color="primary"
            onClick={this.createQuiz}
          >
            Create Quiz
          </Button>
        </Box>
      </div>
    );
  }
}
