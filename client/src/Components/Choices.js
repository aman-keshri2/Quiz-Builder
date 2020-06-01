import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class Choices extends Component {
  render() {
    return (
      <div>
        <TextField
          fullWidth
          margin="normal"
          variant="filled"
          name={this.props.index}
          // onChange={(e) => this.handleChange(e, this.props.index)}
          label={"choice number " + this.props.index}
        />
      </div>
    );
  }
}
