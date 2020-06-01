import React, { Component } from "react";
import NavBar from "./NavBar";
import Box from "@material-ui/core/Box";
export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
      </div>
    );
  }
}
