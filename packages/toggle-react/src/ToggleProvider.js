import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import { ReactToggleContext } from "./Context";
import togglePropType from "./util/togglePropType";

export default class ToggleProvider extends Component {
  static propTypes = {
    context: PropTypes.object,
    children: PropTypes.any,
    toggle: togglePropType,
  };

  render() {
    const Context = this.props.context || ReactToggleContext; // eslint-disable-line no-unused-vars

    return (
      <Context.Provider value={{ toggle: this.props.toggle }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
