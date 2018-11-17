import React, { Component } from "react";
import { Toggle, togglePropType, withToggle } from "@mathdoy/toggle-react";
import FeatureDisable from "../components/FeatureDisable";

class Index extends Component {
  static propTypes = {
    toggle: togglePropType.isRequired,
  };

  render() {
    const { toggle } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          Index page
          <br />
          <Toggle isEnabled="foo" disableComponent={<FeatureDisable />}>
            Has Foo
          </Toggle>
          {(toggle.isEnabled("foo") && <div>Has Foo</div>) || (
            <FeatureDisable />
          )}
        </header>
      </div>
    );
  }
}

export default withToggle(Index);
