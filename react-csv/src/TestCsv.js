import React, { Component } from "react";
import Test from "./Test";
import TestDua from "./TestDua";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class TestCsv extends Component {
  render() {
    return (
      <div className="container">
        <Row
          style={{ width: "100%", height: "40vh", background: "darkSeaGreen" }}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <Test />
        </Row>
        <Row
          style={{ width: "100%", height: "40vh", background: "darkSeaGreen" }}
          className="d-flex justify-content-center align-items-center"
        >
          <TestDua />
        </Row>
        <Row
          style={{ width: "100%" }}
          className="mb-4 d-flex justify-content-center align-items-center"
        >
          <Button className="mt-4" variant="secondary" size="lg">
            <Link className="text-white" to="/">
              <strong>Back</strong>
            </Link>
          </Button>
        </Row>
      </div>
    );
  }
}

export default TestCsv;
