import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import "./login.css";
export default class NavBar extends Component {
  componentDidMount() {
    if (localStorage.length === 0) {
      this.props.history.push("/");
    }
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  handleCreateQuiz = () => {
    this.props.history.push("/CreateQuiz");
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Box
          display="flex"
          alignItems="center"
          p={1}
          style={{
            width: "100%",
            height: "55px",
            backgroundColor: "rgba(74, 97, 242, 1)",
          }}
        >
          <Box p={2} flexGrow={1} display="flex">
            <Box p={2}>
              <span
                style={{ color: "white", fontWeight: 600, fontSize: "20px" }}
              >
                Quiz-Manager
              </span>
            </Box>
            <Box
              p={2}
              onClick={this.handleCreateQuiz}
              style={{ backgroundColor: "blue" }}
              className="create-quiz"
            >
              <span
                style={{ color: "white", fontWeight: 600, fontSize: "18px" }}
              >
                Create Quiz
              </span>
            </Box>
          </Box>

          <Box p={1}>
            <span style={{ color: "white", fontWeight: 600, fontSize: "20px" }}>
              Welcome!
            </span>{" "}
            <span
              style={{
                color: "#0dffe9",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {localStorage.getItem("username")}
            </span>{" "}
          </Box>
          <Box p={4}>
            <Button variant="contained" onClick={this.logout} color="secondary">
              Log Out
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}
