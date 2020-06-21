import React, { Component, Fragment } from "react";
import Walls from "../../image/wall.jpg";
import "../constant/css/fontcss.css";
import { Row, Col } from "reactstrap";
import CustomNavbar from "../constant/navbar";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            backgroundImage: `url(${Walls})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="w-100 h-100 d-flex justify-content-center align-items-center container">
            <CustomNavbar />
            <Row className="w-100 m-0">
              <Col className="d-flex flex-column justify-content-center align-items-start">
                <h2 className="mt-5 text-white b612">Hello,</h2>
                <h2 className="mb-5 text-white b612">World</h2>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <h2 className="mt-5 mb-5 text-white b612-bold">
                  I'm Gilang Riyadi Kuntiarso
                </h2>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Index;
