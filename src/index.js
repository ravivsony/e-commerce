import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import BaseLayout from "./components/BaseLayout";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>,

  document.getElementById("root")
);
registerServiceWorker();
