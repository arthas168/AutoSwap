import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../Header/";
import Footer from "../Footer/";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

export default function UserInfo() {
  const [isActionClosed, setIsActionClosed] = useState(true);
  const [isActionDeposit, setIsActionDeposit] = useState(false);
  const [chosenCurrency, setChosenCurrency] = useState("ETH");

  let actionIsOpenClass = isActionClosed ? "closed" : "open";

  const onBtnClick = (actionStatus, isDeposit, currency) => {
    console.log(actionStatus, " ", isDeposit);
    setIsActionClosed(actionStatus);
    setIsActionDeposit(isDeposit);
    setChosenCurrency(currency);
  };

  return (
    <Fragment>
      <Header />
      <section id="userInfo">
        <Particles className="particles" />
        <div className="container">
          <div className="main-info">
            <h1>
              Total Portfolio Value: <span className="green-span">20045$</span>
            </h1>
            <div className="currencies-list">
              <div className="eth info-group">
                <p>ETH (ETHEREUM) - 2.5</p>
                <p className="green-span">786$</p>
                <div className="buttons">
                  <Button
                    onClick={() => onBtnClick(false, true, "ETH")}
                    variant="success"
                  >
                    Deposit
                  </Button>
                  <Button
                    onClick={() => onBtnClick(false, false, "ETH")}
                    variant="danger"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
              <div className="trx info-group">
                <p>TRON (TRX) - 12243</p>
                <p className="green-span">20$</p>
                <div className="buttons">
                  <Button
                    onClick={() => onBtnClick(false, true, "TRX")}
                    variant="success"
                  >
                    Deposit
                  </Button>
                  <Button
                    onClick={() => onBtnClick(false, false, "TRX")}
                    variant="danger"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            </div>
            <div className={"action " + actionIsOpenClass}>
              <span className="closer" onClick={() => setIsActionClosed(true)}>
                X
              </span>
              <p className="action-text">
                How much{" "}
                <span className={isActionDeposit ? "green-span" : "red-span"}>
                  {chosenCurrency}{" "}
                </span>{" "}
                to{" "}
                <span className={isActionDeposit ? "green-span" : "red-span"}>
                  {" "}
                  {isActionDeposit ? "deposit" : "withdraw"}
                </span>
                ?
              </p>
              <InputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" />
                <InputGroup.Append>
                  <Button variant={isActionDeposit ? "success" : "danger"}>
                    {isActionDeposit ? "Deposit" : "Withdraw"}
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
          <div className="transaction-list">
            <p className="history">Transaction History</p>
            <Scrollbars
              className="scroller-area"
              style={{ width: 400, height: 525 }}
            >
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>

                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
              <div className="transaction-card">
                <p>Exchanged: X ETH for Y TRX</p>
                <p>On date: 21-11-2019</p>
                <Link to="/transaction">
                  <Button variant="primary">More Info</Button>
                </Link>
              </div>
            </Scrollbars>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
