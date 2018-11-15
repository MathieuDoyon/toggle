import React, { Component } from "react";
import { Toggle, withToggle, togglePropType } from "@mathdoy/toggle-react";
import FeatureDisable from "./FeatureDisable";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  static propTypes = {
    toggle: togglePropType.isRequired,
  };

  render() {
    const { toggle } = this.props;

    console.log("is logo enabled:", toggle.isEnabled("logo")); // eslint-disable-line no-console

    return (
      <div className="App">
        <header className="App-header">
          <Toggle isEnabled="logo" disableComponent={<FeatureDisable />}>
            <img src={logo} className="App-logo" alt="logo" />
          </Toggle>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withToggle(App);
