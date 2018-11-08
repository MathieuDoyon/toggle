import React from "react";
import ReactDOM from "react-dom";
import { createToggle } from "@mathdoy/toggle";
import { ToggleProvider } from "@mathdoy/toggle-react";
import { createToggleQuerystring } from "@mathdoy/toggle-querystring";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const toggleQuerystring = createToggleQuerystring({
  // Query string parameter
  param: "features",
  // Default features
  features: {
    logo: true,
  },
});

const toggle = createToggle({
  features: toggleQuerystring(window.location.search),
});

console.log({ features: toggle.features });

ReactDOM.render(
  <ToggleProvider toggle={toggle}>
    <App />
  </ToggleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
