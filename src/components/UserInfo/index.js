import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function UserInfo() {
  return (
    <section id="login">
      <div className="container">
          <p>Portfolio Value: 20045$</p>
        <div className="transaction-list">
          <div className="transaction-card">
            <p>
              <span>Exchanged: X ETH for Y TRX</span>
              <span>On date: 21-11-2019</span>
              <Button variant="primary">More Info</Button>
            </p>
          </div>
          <div className="transaction-card">
            <p>
              <span>Exchanged: X ETH for Y TRX</span>
              <span>On date: 21-11-2019</span>
              <Button variant="primary">More Info</Button>
            </p>
          </div>
          <div className="transaction-card">
            <p>
              <span>Exchanged: X ETH for Y TRX</span>
              <span>On date: 21-11-2019</span>
              <Button variant="primary">More Info</Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
