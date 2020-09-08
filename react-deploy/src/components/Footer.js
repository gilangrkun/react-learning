import React, { Component, Fragment } from "react";
import { Row, Tooltip, Alert } from "reactstrap";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaWhatsappSquare,
  FaTelegramPlane,
} from "react-icons/fa";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover5: false,
      hover5: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
    };
  }

  toggleHover1 = () => this.setState({ hover1: !this.state.hover1 });
  toggleHover2 = () => this.setState({ hover2: !this.state.hover2 });
  toggleHover3 = () => this.setState({ hover3: !this.state.hover3 });
  toggleHover4 = () => this.setState({ hover4: !this.state.hover4 });
  toggleHover5 = () => this.setState({ hover5: !this.state.hover5 });
  toggleHover6 = () => this.setState({ hover6: !this.state.hover6 });

  render() {
    let twHover;
    let fbHover;
    let inHover;
    let gitHover;
    let waHover;
    let telHover;
    this.state.hover1 === true
      ? (twHover = {
          color: "#00acee",
        })
      : (twHover = {
          color: "dimGrey",
        });
    this.state.hover2 === true
      ? (fbHover = {
          color: "#3b5998",
        })
      : (fbHover = {
          color: "dimGrey",
        });
    this.state.hover3 === true
      ? (inHover = {
          color: "#2867B2",
        })
      : (inHover = {
          color: "dimGrey",
        });
    this.state.hover4 === true
      ? (gitHover = {
          //   color: "#6e5494",
          color: "#333",
        })
      : (gitHover = {
          color: "dimGrey",
        });
    this.state.hover5 === true
      ? (waHover = {
          color: "#075e54",
        })
      : (waHover = {
          color: "dimGrey",
        });
    this.state.hover6 === true
      ? (telHover = {
          color: "#0088cc",
        })
      : (telHover = {
          color: "dimGrey",
        });

    return (
      <Fragment>
        <div
          style={{
            width: "100%",
            height: "35vh",
            background: "lavender",
          }}
        >
          <div className="h-100 container">
            <Row className="h-50 d-flex flex-column justify-content-center align-items-center">
              <p className="text-dark m-0">
                Send your professional messages to:
              </p>
              <Alert color="info">
                <strong>gilang.grk17@gmail.com</strong>
              </Alert>
            </Row>
            <Row className="h-25 d-flex justify-content-center align-items-center">
              <p className="m-0 text-dark">Reach him everywhere:</p>
              <div className="w-100 d-flex justify-content-center align-items-center">
                <a
                  href="https://twitter.com/kuntiarso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare
                    style={twHover}
                    onMouseEnter={this.toggleHover1}
                    onMouseLeave={this.toggleHover1}
                    size="30px"
                    id="twitter"
                  />
                  <Tooltip
                    target="twitter"
                    isOpen={this.state.hover1}
                    toggle={this.toggleHover1}
                  >
                    Twitter
                  </Tooltip>
                </a>
                <a
                  href="https://www.facebook.com/kuntiarso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare
                    style={fbHover}
                    onMouseEnter={this.toggleHover2}
                    onMouseLeave={this.toggleHover2}
                    size="30px"
                    id="fb"
                  />
                  <Tooltip
                    target="fb"
                    isOpen={this.state.hover2}
                    toggle={this.toggleHover2}
                  >
                    Facebook
                  </Tooltip>
                </a>
                <a
                  href="https://www.linkedin.com/in/kuntiarso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    style={inHover}
                    onMouseEnter={this.toggleHover3}
                    onMouseLeave={this.toggleHover3}
                    size="30px"
                    id="in"
                  />
                  <Tooltip
                    target="in"
                    isOpen={this.state.hover3}
                    toggle={this.toggleHover3}
                  >
                    LinkedIn
                  </Tooltip>
                </a>
                <a
                  href="https://github.com/gilangrkun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare
                    style={gitHover}
                    onMouseEnter={this.toggleHover4}
                    onMouseLeave={this.toggleHover4}
                    size="30px"
                    id="github"
                  />
                  <Tooltip
                    target="github"
                    isOpen={this.state.hover4}
                    toggle={this.toggleHover4}
                  >
                    GitHub
                  </Tooltip>
                </a>
                <a
                  href="https://wa.me/6282190780310?text=Hello,%20you%20can%20send%20me%20your%20messages%20now"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsappSquare
                    style={waHover}
                    onMouseEnter={this.toggleHover5}
                    onMouseLeave={this.toggleHover5}
                    size="30px"
                    id="wa"
                  />
                  <Tooltip
                    target="wa"
                    isOpen={this.state.hover5}
                    toggle={this.toggleHover5}
                  >
                    WhatsApp
                  </Tooltip>
                </a>
                <a
                  href="https://t.me/kuntiarso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane
                    style={telHover}
                    onMouseEnter={this.toggleHover6}
                    onMouseLeave={this.toggleHover6}
                    size="30px"
                    id="tele"
                  />
                  <Tooltip
                    target="tele"
                    isOpen={this.state.hover6}
                    toggle={this.toggleHover6}
                  >
                    Telegram
                  </Tooltip>
                </a>
              </div>
            </Row>
            <Row className="h-25 d-flex justify-content-center align-items-end">
              <p className="text-dark m-0">PRIVACY | KUNTIARSO &copy; 2020</p>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
