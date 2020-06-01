import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Home";
// import Page1 from "./Components/Page1";
import CreateQuiz from "./Components/CreateQuiz";
import AdminDashboard from "./Components/AdminDashboard";
import AdminLogIn from "./Components/AdminLogIn";
import LandingPage from "./Components/LandingPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/AdminLogIn" component={AdminLogIn} />
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
        <Route exact path="/CreateQuiz" component={CreateQuiz} />
      </BrowserRouter>
    );
  }
}

export default App;
