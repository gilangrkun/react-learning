import React, { Fragment, useState } from "react";
import { useSpring, animated as a, config } from "react-spring";
import { Container, Row, Col, Button } from "reactstrap";
import Welcome from "../components/CustomWelcome";

// custom components
import Wall2 from "../image/wallDua.jpg";
import Wall5 from "../image/wall5.jpg";

const Homepage = () => {
  const [next, setNext] = useState(true);
  const [wide, setWide] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [active, setActive] = useState(false);

  const bgFade = useSpring({
    from: {
      opacity: "0",
      width: "100%",
      height: "0vh",
    },
    to: {
      opacity: "1",
      width: "100%",
      height: "100vh",
    },
    config: config.slow,
  });

  let handleNext = () => {
    setNext(!next);
  };
  let imgUrl = next ? Wall5 : Wall2;

  let handleWide = () => {
    setWide(!wide);
  };

  let handleYellow = () => {
    setYellow(!yellow);
  };

  let handleActive = () => {
    setActive(!active);
  };

  let colorBtn = yellow ? "success" : "secondary";
  let colorText = yellow ? "text-success" : "";

  let radius = wide ? "0px" : "7px";

  const bgWide = useSpring({
    from: {
      width: wide ? "90%" : "100%",
      height: wide ? "93%" : "100%",
    },
    to: {
      width: wide ? "100%" : "90%",
      height: wide ? "100%" : "93%",
    },
  });

  const textFade = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    delay: 1000,
  });

  const textFadeReverse = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
  });

  return (
    <Fragment>
      <a.div
        style={bgFade}
        className="row m-0 bg-dark d-flex justify-content-center align-items-center"
      >
        <a.div style={bgWide}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              borderRadius: `${radius}`,
            }}
          >
            <Container className="w-100 h-100">
              <Row className="h-100">
                <Col className="pt-5 h-100 d-flex flex-column justify-content-start align-items-start">
                  <a.h1 style={textFade}>Gilang Riyadi Kuntiarso</a.h1>
                  <a.h2 className={colorText} style={textFadeReverse}>
                    Hello
                  </a.h2>
                </Col>
                <Col className="pb-5 h-100 d-flex flex-column justify-content-end align-items-end">
                  <a.h2 className={colorText} style={textFadeReverse}>
                    Kuntiarso
                  </a.h2>
                  <a.div style={textFadeReverse}>
                    <Button
                      outline
                      size="sm"
                      onClick={() => {
                        handleWide();
                        handleActive();
                      }}
                      color={colorBtn}
                      active={active}
                      className="ml-1"
                    >
                      Wide
                    </Button>
                    <Button
                      outline
                      size="sm"
                      onClick={handleYellow}
                      color={colorBtn}
                      active={yellow}
                      className="ml-1"
                    >
                      Green
                    </Button>
                    <Button
                      outline
                      size="sm"
                      onClick={handleNext}
                      color={colorBtn}
                      className="ml-1"
                    >
                      Change Background
                    </Button>
                  </a.div>
                </Col>
              </Row>
            </Container>
          </div>
        </a.div>
      </a.div>
      <Welcome />
      <div style={{ width: "100%", height: "100vh" }}></div>
    </Fragment>
  );
};

export default Homepage;
