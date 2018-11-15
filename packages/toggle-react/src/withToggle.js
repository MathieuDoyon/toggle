import React from "react";
import PropTypes from "prop-types";
import { ReactToggleContext } from "./Context";
import getDisplayName from "./util/getDisplayName";

const withToggle = Component => {
  class WithToggleHOC extends React.Component {
    render() {
      const Context = this.props.context || ReactToggleContext; // eslint-disable-line no-unused-vars

      return (
        <Context.Consumer>
          {({ toggle }) =>
            toggle ? (
              <Component toggle={toggle} {...this.props} />
            ) : (
              <Component {...this.props} />
            )
          }
        </Context.Consumer>
      );
    }
  }

  WithToggleHOC.contextTypes = {
    toggle: PropTypes.object,
  };

  if (process.env.NODE_ENV !== "production") {
    WithToggleHOC.displayName = `WithToggleHOC(${getDisplayName(Component)})`;
  }

  return WithToggleHOC;
};

export default withToggle;
