import React, { Component } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import Choices from "./Choices";
export default class Question extends Component {
  state = {
    choices: [],
    QuestionDes: "",
    tag: "",
    Ansdes: "",
    AnsChoiceNumber: "",
    choicesvalue: [],
  };

  componentDidMount() {
    let choices = [];
    choices[0] = <Choices index={0} />;
    choices[1] = <Choices index={1} />;
    this.setState({
      choices,
    });
  }

  addChoice = () => {
    let choices = [];
    choices = [...this.state.choices];
    let index = choices.length;
    choices.push(<Choices index={index} />);
    this.setState({
      choices,
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Question Number {this.props.index + 1} </h3>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          style={{ width: "100%", marginTop: "50px", margin: "auto" }}
        >
          <TextField
            id="filled-with-placeholder"
            label="QuestionDescription"
            placeholder="QuestionDes"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.myChangeHandler}
            name="QuestionDes"
          />

          <TextField
            id="filled-with-placeholder"
            label="tag"
            placeholder="tag"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.myChangeHandler}
            name="tag"
          />

          <TextField
            id="filled-with-placeholder"
            label="AnsDescritpion"
            placeholder="Ansdes"
            fullWidth
            margin="normal"
            variant="filled"
            onChange={this.myChangeHandler}
            name="Ansdes"
          />

          <TextField
            id="filled-with-placeholder"
            label="AnsChoiceNumber"
            placeholder="AnsChoiceNumber"
            fullWidth
            margin="normal"
            variant="filled"
            type="number"
            onChange={this.myChangeHandler}
            name="AnsChoiceNumber"
          />
          <h4>Your Choices</h4>
          {this.state.choices}
          <Button
            variant="contained"
            onClick={this.addChoice}
            color="secondary"
          >
            Add Choice
          </Button>
        </Box>
      </div>
    );
  }
}
