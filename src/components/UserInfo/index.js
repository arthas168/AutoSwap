import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../Header/";

export default function UserInfo() {
  const [isActionClosed, setIsActionClosed] = useState(false);
  let actionBoxClass = isActionClosed ? "closed" : "open";

  return (
    <section id="userInfo">
      <Header />
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
                  onClick={() => setIsActionClosed(false)}
                  variant="success"
                >
                  Deposit
                </Button>
                <Button
                  onClick={() => setIsActionClosed(false)}
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
                  onClick={() => setIsActionClosed(false)}
                  variant="success"
                >
                  Deposit
                </Button>
                <Button
                  onClick={() => setIsActionClosed(false)}
                  variant="danger"
                >
                  Withdraw
                </Button>
              </div>
            </div>
          </div>
          <div className={"action " + actionBoxClass}>
            <span className="closer" onClick={() => setIsActionClosed(true)}>
              X
            </span>
            <p className="action-text">
              How much <span className="green-span">ETH</span> to{" "}
              <span className="green-span">deposit</span>?
            </p>
            <InputGroup className="mb-3">
              <FormControl aria-describedby="basic-addon1" />
              <InputGroup.Append>
                <Button variant="success">Deposit</Button>
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

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>

              <Button variant="primary">More Info</Button>
            </div>
            <div className="transaction-card">
              <p>Exchanged: X ETH for Y TRX</p>
              <p>On date: 21-11-2019</p>
              <Button variant="primary">More Info</Button>
            </div>
          </Scrollbars>
        </div>
      </div>
    </section>
  );
}
