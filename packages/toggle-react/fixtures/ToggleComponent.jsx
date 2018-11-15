import React from "react";
import { Toggle } from "../src/index";

class ToggleComponent extends React.Component {
  render() {
    return (
      <div>
        <Toggle isEnabled="foo">
          <div>foo</div>
        </Toggle>
      </div>
    );
  }
}

export default ToggleComponent;
