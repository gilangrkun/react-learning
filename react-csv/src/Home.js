import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{ background: "honeyDew", width: "100%", height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            style={{
              width: "100%",
              height: "30vh",
              background: "lightSteelBlue",
            }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="mb-4">
              <h4 className="text-black">Menu</h4>
            </div>
            <div
              style={{ background: "lightSteelBlue" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Button size="lg" variant="primary" className="mr-4">
                <Link className="text-white" to="/app">
                  <strong>Demo</strong>
                </Link>
              </Button>
              <Button size="lg" variant="secondary">
                <Link className="text-white" to="/csv">
                  <strong>Soon..</strong>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
