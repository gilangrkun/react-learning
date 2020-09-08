import React, { Component, Fragment } from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import EmailingImg from "../image/emailing2.png";
import OmsProduct from "../image/products.png";
import OmsIntegration from "../image/integration.png";

class Projects extends Component {
  render() {
    let color;
    let color2;
    let colorBg;
    let colorRow;
    if (this.props.color === true) {
      color = "rounded text-dark";
      color2 = "text-primary";
      colorRow = {
        width: "100%",
        height: "100vh",
        background: "#696969",
      };
      colorBg = {
        backgroundColor: "#98FB98",
      };
    } else {
      color = "rounded text-white";
      color2 = "text-info";
      colorRow = {
        width: "100%",
        height: "100vh",
        background: "cadetBlue",
      };
      colorBg = {
        backgroundColor: "#696969",
      };
    }

    // color = {
    //     backgroundColor: "#5cb85c",
    //     color: "#292b2c",
    //   };
    //   colorBg = {
    //     width: "100%",
    //     height: "100vh",
    //     background: "paleGreen",
    //   };
    // } else {
    //   color = {
    //     backgroundColor: "#696969",
    //     color: "#f7f7f7",
    //   };
    //   colorBg = {
    //     width: "100%",
    //     height: "100vh",
    //     background: "snow",
    //   };

    return (
      <Fragment>
        <div className="text-dark" style={colorRow}>
          <div className="pt-5 pb-5 container">
            <h4 className="mb-3 text-white">
              <u>
                <strong>His Projects &#10032;</strong>
              </u>
            </h4>
            <CardDeck>
              <Card style={{ boxShadow: "-2px -2px 6px 3px rgba(0,0,0,0.4)" }}>
                <CardImg
                  top
                  width="100%"
                  src={EmailingImg}
                  alt="Card image cap"
                />
                <CardBody className={color} style={colorBg}>
                  <CardTitle>
                    <strong>Emailing-You</strong>
                  </CardTitle>
                  <CardSubtitle>on going development</CardSubtitle>
                  <hr />
                  <CardText>
                    This is his personal project which aim to reach his friends
                    by sending a personal letter through their email address.
                    It's kinda like a newsletter but actually not, distinctively
                    he will put his messages that he himself will handcrafting
                    personally for them.
                  </CardText>
                  <Button color="warning">See here!</Button>
                </CardBody>
              </Card>
              <Card style={{ boxShadow: "-2px -2px 6px 3px rgba(0,0,0,0.4)" }}>
                <CardImg
                  top
                  width="100%"
                  src={OmsIntegration}
                  alt="Card image cap"
                />
                <CardBody className={color} style={colorBg}>
                  <CardTitle>
                    <strong>Build oms.detalase.com</strong>
                  </CardTitle>
                  <CardSubtitle>
                    integration system to the marketplaces
                  </CardSubtitle>
                  <hr />
                  <CardText>
                    Him and his team were successfully built an integration
                    selling system who can integrate to the marketplaces. The
                    system is currently used by their client which is{" "}
                    <a className={color2} href="https://detalase.com">
                      PT. Digital Etalase Indonesia
                    </a>
                    . And here is their project{" "}
                    <a className={color2} href="https://oms.detalase.com">
                      oms.detalase.com
                    </a>
                    .
                  </CardText>
                  <Button color="success">See here!</Button>
                </CardBody>
              </Card>
              <Card style={{ boxShadow: "-2px -2px 6px 3px rgba(0,0,0,0.4)" }}>
                <CardImg
                  top
                  width="100%"
                  src={OmsProduct}
                  alt="Card image cap"
                />
                <CardBody className={color} style={colorBg}>
                  <CardTitle>
                    <strong>Maintenance project (oms.detalase.com)</strong>
                  </CardTitle>
                  <CardSubtitle>
                    maintain the website and add new features
                  </CardSubtitle>
                  <hr />
                  <CardText>
                    Him and his colleagues are currently working to maintain{" "}
                    <a className={color2} href="https://oms.detalase.com">
                      oms.detalase.com
                    </a>{" "}
                    website as the client wants to have and add new features or
                    change the previous ones.
                  </CardText>
                  <Button color="primary">See here!</Button>
                </CardBody>
              </Card>
            </CardDeck>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
