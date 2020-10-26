import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";
import Snowstorm from "react-snowstorm";

import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    console.log(darkMode);
  }
  return (
    <div
      className={classNames(
        Style.container,
        darkMode ? Style.dark : Style.light
      )}
    >
      {darkMode && <Snowstorm excludeMobile={false} freezeOnBlur={false} />}
      {!darkMode && (
        <Snowstorm
          snowCharacter="🍃"
          excludeMobile={false}
          freezeOnBlur={false}
        />
      )}
      <Navbar darkMode={darkMode} handleClick={handleClick} />
      <Main />
    </div>
  );
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/portfolio" component={Portfolio}></Route>
  </Switch>
);
