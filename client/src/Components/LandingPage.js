import React, { Component } from "react";
import Popup from "./Popup";
import "./landingPage.css";
export default class LandingPage extends Component {
  state = {
    isDocumentReady: false,
  };
  componentDidMount() {
    this.setState({ isDocumentReady: true }, () => {
      console.log(this.state);
    });
  }

  render() {
    let res = this.state.isDocumentReady ? <Popup {...this.props} /> : null;

    return <div className="banner">{res}</div>;
  }
}
