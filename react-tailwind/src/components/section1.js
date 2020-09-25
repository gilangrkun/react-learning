import React, { Component } from "react";

import Lottie from "react-lottie";
import arrow from "../assets/lottie/7796-scroll-arrows.json";

class Section1 extends Component {
  render() {
    const arrowLott = {
      loop: true,
      autoplay: true,
      animationData: arrow,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="w-full h-screen absolute top-0 flex items-end font-bold font-audrey-bold text-base">
        <div className="hidden container mx-auto md:grid md:grid-cols-4">
          <div className="col-span-3">
            <p className="text-6xl" style={{ color: "#6f6ee7" }}>
              <i>
                Welcome to
                <br />
                Mr. Kun - Web Page
              </i>
            </p>
          </div>
          <div className="col-span-1 p-12">
            <Lottie
              style={{ cursor: "default" }}
              isClickToPauseDisabled={true}
              options={arrowLott}
            />
          </div>
        </div>
        <div className="container mx-auto md:hidden grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-4xl text-center" style={{ color: "#6f6ee7" }}>
              <i>
                Welcome to
                <br />
                Mr. Kun - Web Page
              </i>
            </p>
          </div>
          <div className="col-span-1 px-32 pt-32 pb-10">
            <Lottie
              style={{ cursor: "default" }}
              isClickToPauseDisabled={true}
              options={arrowLott}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
