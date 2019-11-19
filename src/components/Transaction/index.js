import React, { Fragment } from "react";
import Header from "../Header";
import Particles from "react-particles-js";
export default function index() {
  return (
    <Fragment>
      <Header />
      <section id="transaction">
        <Particles className="particles" />
        <div className="container">
          <div className="info-table">
            <p className="back">Back</p>
            <p>
              Transaction ID - <span>7534873</span>
            </p>
            <p>
              ETH Amount - <span>0.02</span>
            </p>
            <p>
              TRX Amount - <span>1113</span>
            </p>
            <p>
              Date - <span>11.11.2019</span>
            </p>
            <p>
              ETH Price (in time of transaction) - <span>360$</span>
            </p>
            <p>
              TRX Price (in time of transaction) - <span>0.26$</span>
            </p>
            <p>
              Transaction Hash -{" "}
              <span>ak_n1qctXxqgrWw46kBuTKSVDSCPixxomX5tWh42wFCspBUwcDJ8</span>
            </p>
            <p>
              Execution Time - <span>1.20m</span>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
