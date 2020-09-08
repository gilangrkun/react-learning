import React, { Component, Fragment } from "react";
import { Row, Col, Alert, Badge } from "reactstrap";

import ProfilePic from "../image/profilePic.jpg";

class Profile extends Component {
  state = {
    bio: [
      "Hello World, I'm a ",
      "Here I am gonna tell you him, <-- who on the left over there in the picture box.",
      "He is a fishery undergraduate who loves to study everything that has attracted his interests.",
      "You know what? He has found his passion in Software Development since the beginning of 2020.. WOW!",
      "To learn about the software more deeply, he has taken part in coding boot camp for beginner programmer in South Jakarta.",
    ],
    dataKey: [
      {
        key: "His Name",
        val: "Gilang Riyadi Kuntiarso",
      },
      {
        key: "His Date of Birth",
        val: "20/01/1997",
      },
      {
        key: "His Address",
        val: "South Tangerang",
      },
      {
        key: "His Email",
        val: "gilang.grk17@gmail.com",
      },
      {
        key: "His Phone",
        val: "+62 82190780xxx",
      },
    ],
  };

  render() {
    let color;
    let colorBg;
    if (this.props.color === true) {
      color = {
        backgroundColor: "#5cb85c",
        color: "#292b2c",
      };
      colorBg = {
        width: "100%",
        height: "100vh",
        background: "paleGreen",
      };
    } else {
      color = {
        backgroundColor: "#696969",
        color: "#f7f7f7",
      };
      colorBg = {
        width: "100%",
        height: "100vh",
        background: "mintCream",
      };
    }

    return (
      <Fragment>
        <div className="text-dark" style={colorBg}>
          <div className="pt-5 pb-5 container">
            <Row className="mb-4 d-flex justify-content-start align-items-center">
              <div
                className="bg-dark mr-4"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  backgroundImage: `url(${ProfilePic})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid dimGrey",
                  boxShadow: "1px 1px 5px 3px rgba(0,0,0,0.2)",
                }}
              ></div>
              <div>
                {this.state.bio.map((el, index) =>
                  index === 0 ? (
                    <div className="mb-2">
                      <span
                        className="pl-2 pr-2 pt-1 pb-1 mb-1 rounded"
                        style={color}
                      >
                        {el}{" "}
                        <span className="pl-1 pr-1 bg-light text-dark rounded">
                          <strong>Stranger</strong>...
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="pl-2 pr-2 mb-1 rounded" style={color}>
                      {el}
                    </div>
                  )
                )}
                <div className="pl-2 pr-2 mb-1 rounded" style={color}>
                  Currently, he is working as a Web Programmer at a small
                  startup company -->{" "}
                  <a
                    className="pl-1 pr-1 bg-primary text-light rounded"
                    href="https://www.cronos.id"
                  >
                    <strong>PT. Cronos.id</strong>
                  </a>
                </div>
              </div>
            </Row>
            <Row>
              <Col md={7}>
                <div>
                  {this.state.dataKey.map((el) =>
                    el.key === "His Phone" ? (
                      <span>
                        <p className="mb-0">
                          <span className="pl-2 pr-2 rounded" style={color}>
                            {el.key}
                          </span>
                        </p>
                        <p className="ml-2">
                          {el.val} --->{" "}
                          <Badge color="dark">
                            oops! Sorry, but please reach him only on his email
                            yaa! &#9787;
                          </Badge>{" "}
                        </p>
                      </span>
                    ) : el.key === "His Email" ? (
                      <span>
                        <p className="mb-0">
                          <span className="pl-2 pr-2 rounded" style={color}>
                            {el.key}
                          </span>
                        </p>
                        <p className="ml-2">
                          {el.val} --> <Badge color="success">&#10004;</Badge>{" "}
                        </p>
                      </span>
                    ) : (
                      <span>
                        <p className="mb-0">
                          <span className="pl-2 pr-2 rounded" style={color}>
                            {el.key}
                          </span>
                        </p>
                        <p className="ml-2">{el.val}</p>
                      </span>
                    )
                  )}
                </div>
              </Col>
              <Col md={5}>
                <h4 className="mb-3">
                  <u>
                    <strong>His Skills &#10032;</strong>
                  </u>
                </h4>
                <div
                  style={{
                    boxShadow: "-2px -2px 4px 2px rgba(0,0,0,0.3)",
                  }}
                  className="border rounded pt-3 pb-3 bg-light"
                >
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="danger">HTML</Badge>
                    </h4>
                    <h4>
                      <Badge color="dark">CSS</Badge>
                    </h4>
                    <h4>
                      <Badge color="warning">JavaScript</Badge>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="info">ReactJS</Badge>
                    </h4>
                    <h4>
                      <Badge color="primary">Bootstrap</Badge>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="success">Spring Boot</Badge>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="primary">MongoDB</Badge>
                    </h4>
                    <h4>
                      <Badge color="danger">Java</Badge>
                    </h4>
                    <h4>
                      <Badge color="dark">MariaDB</Badge>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="secondary">Git</Badge>
                    </h4>
                    <h4>
                      <Badge color="info">Arch Linux</Badge>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h4>
                      <Badge color="warning">Firebase</Badge>
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
