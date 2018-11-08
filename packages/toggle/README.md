<h1 align="center">
  Toggle
</h1>

<p align="center">
Core library of [toggle](https://github.com/MathieuDoyon/toggle)
</p>

## Installation

```bash
$ npm install --save @mathdoy/toggle
```

**Note:** This package povides the core functionality for [toggle](https://github.com/MathieuDoyon/toggle), but you might not to want to install it alone.
If you are writing an application that will run react you should install @mathdoy/toggle-react next to this one. If you want to use it for your backend node server, we have an restify middleware that you should install @mathdoy/toggle-restify

```javascript
import { createToggle } from "@mathdoy/toggle";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    logo: false,
    foo: false,
  },
});

// Register new feature into Toggle
toggle.register("foo", true);

// Look if the feature is enabled or not return Boolean
toggle.isEnabled("foo") // true

// Remove feature from registry
toggle.unregister("foo")
```

# Using it with React

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-react
```

```javascript
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
import { ToggleProvider, withToggle, togglePropType } from "@mathdoy/toggle-react";

// ...

class App extends Component {
  static propTypes = {
    toggle: togglePropType.isRequired,
  };

  render() {
    const { toggle } = this.props;

    return (
      <div className="App">
        {toggle.isEnabled("foo") && <div>foo</div>}
      </div>
    );
  }
}

export default withToggle()(App);
```

See more information for [toggle-react](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle-react)


# Using it with restify

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-restify
```

See more information for [toggle-restify](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle-restify)

## License

Toggle is licensed under the [MIT License](https://github.com/MathieuDoyon/toggle/blob/master/LICENSE.md).
