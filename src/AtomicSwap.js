import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwapState from "./components/Swap/swapState";
import HomePage from "./components/Home";
import Swap from "./components/Swap";
import UserInfo from "./components/UserInfo";
import LoginView from "./components/Login";
import RegisterView from "./components/Register";
import About from "./components/About";
import Contacts from "./components/Contacts";
import "./styles/main.scss";

function AtomicSwap() {
  return (
    <SwapState>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/swap" exact component={Swap} />
          <Route path="/user" exact component={UserInfo} />
          <Route path="/login" exact component={LoginView} />
          <Route path="/register" exact component={RegisterView} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </Router>
    </SwapState>
  );
}

export default AtomicSwap;
