import React from "react";
import { withToggle, togglePropType } from "../src/index";

class WithToggle extends React.Component {
  static propTypes = {
    toggle: togglePropType.isRequired,
  };

  render() {
    const { toggle } = this.props;

    return <div>{toggle.isEnabled("foo") && <div>foo</div>}</div>;
  }
}

export default withToggle(WithToggle);
