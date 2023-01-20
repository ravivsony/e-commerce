import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import BaseLayout from "./components/BaseLayout";


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>,

  document.getElementById("root")
);
