<h1 align="center">
  Toggle React
</h1>

<p align="center">
Toggle React library for <a href="https://github.com/MathieuDoyon/toggle">toggle</a>
</p>

## Installation

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-react
```

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { createToggle } from "@mathdoy/toggle";
import { ToggleProvider } from "@mathdoy/toggle-react";
import "./index.css";
import App from "./App";

const toggle = createToggle({
  features: {
    logo: false,
    foo: true,
    // ...features
  },
});

ReactDOM.render(
  <ToggleProvider toggle={toggle}>
    <App />
  </ToggleProvider>,
  document.getElementById("root")
);
```

Then in your components files

```jsx
import React, { Component } from "react";
import { Toggle } from "@mathdoy/toggle-react";
import FeatureDisable from "./FeatureDisable";

// ...

class App extends Component {
  render() {
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

export default App;
```

You can also bind `toggle` into your component props with `withToggle`

```jsx
import {
  ToggleProvider,
  withToggle,
  togglePropType,
} from "@mathdoy/toggle-react";

// ...

class App extends Component {
  static propTypes = {
    toggle: togglePropType.isRequired,
  };

  render() {
    const { toggle } = this.props;

    return (
      <div className="App">{toggle.isEnabled("foo") && <div>foo</div>}</div>
    );
  }
}

export default withToggle(App);
```

## For more information on toggle

For more information on toggle see [toggle](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle)

# Using it with restify

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-restify
```

See more information for [toggle-restify](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle-restify)

## License

Toggle is licensed under the [MIT License](https://github.com/MathieuDoyon/toggle/blob/master/LICENSE.md).
