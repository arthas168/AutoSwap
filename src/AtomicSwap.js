import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwapState from "./components/Swap/swapState";
import HomePage from "./components/Home";
import Swap from "./components/Swap";
import UserInfo from "./components/UserInfo";
import Transaction from "./components/Transaction";
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
          <Route path="/swap" component={Swap} />
          <Route path="/user" component={UserInfo} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </SwapState>
  );
}

export default AtomicSwap;
