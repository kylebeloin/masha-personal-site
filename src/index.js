import React from "react";
import "./index.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

serviceWorkerRegistration.register();

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
