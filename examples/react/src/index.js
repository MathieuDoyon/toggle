import React from "react";
import ReactDOM from "react-dom";
import { createToggle } from "@mathdoy/toggle";
import { ToggleProvider } from "@mathdoy/toggle-react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const toggle = createToggle({
  prefix: "X-FEAT-",
  features: {
    logo: false,
  },
});

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
