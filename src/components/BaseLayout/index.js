import React, { useState, useEffect } from "react";
// Externals
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Cart from "../Cart";
import Women from "../Women";
import Men from "../Men";
import Clothes from "../Clothes";

const BaseLayout = () => {
  const [index, setIndex] = useState(0);
  const classNames = ["first-header", "second-header", "third-header"];
  const [className, setClassName] = useState(classNames[index]);

  let latestIndex = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const timer = setInterval(latestIndex, 3000);
    setClassName(classNames[index]);
    if (index > 2) {
      setIndex(0);
      setClassName(classNames[index]);
    }

    return () => clearInterval(timer);
  });

  return (
    <div>
      <div className={className}>
        <Navbar />
        <Header />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/clothes" component={Clothes} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
export default BaseLayout;
