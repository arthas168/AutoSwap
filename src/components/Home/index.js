import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Particles from "react-particles-js";
import Typed from "react-typed";
import Header from "../Header/";
// import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <section id="homepage">
        <Particles className="particles" />
        <div className="container">
          <Typed
            className="typed-text"
            strings={["Fully Automated", "Cross-chain", "Lightning fast"]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
          <h1>Atomic Swap Service</h1>
          <div className="buttons-wrapper">
            <Link to="/login">
              <Button variant="primary">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="secondary">
                Don't have an account? Register now!
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </Fragment>
  );
}
