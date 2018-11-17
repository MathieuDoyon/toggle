import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import { ReactToggleContext } from "./Context";

export default class Toggle extends Component {
  static propTypes = {
    isEnabled: PropTypes.string.isRequired,
    disableComponent: PropTypes.element,
    context: PropTypes.any,
    children: PropTypes.node,
  };

  render() {
    const Context = this.props.context || ReactToggleContext; // eslint-disable-line no-unused-vars

    return (
      <Context.Consumer>
        {({ toggle }) =>
          toggle && toggle.isEnabled(this.props.isEnabled)
            ? this.props.children
            : this.props.disableComponent
              ? this.props.disableComponent
              : null
        }
      </Context.Consumer>
    );
  }
}
