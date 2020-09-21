import React, { Component } from "react";
import Lottie from "react-lottie";
import welcomeLottie from "../assets/lottie/9563-w-e-l-c-o-m-e.json";
import arrowDown from "../assets/lottie/23903-pointing-arrow.json";

import BgPic from "../assets/img/bgpic.jpg";

class Row1 extends Component {
  render() {
    const welcome = {
      loop: true,
      autoplay: true,
      animationData: welcomeLottie,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const arrow = {
      loop: true,
      autoplay: true,
      animationData: arrowDown,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const style = {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${BgPic})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "local",
    };

    return (
      <div
        className="font-DMmono w-full font-normal text-xl relative"
        style={style}
      >
        <div className="container mx-auto flex flex-shrink-0 flex-col items-center">
          <div className="w-full" style={{ height: "37rem" }}>
            <Lottie options={welcome} />
          </div>
          <div className="w-full mb-4" style={{ height: "5rem" }}>
            <Lottie options={arrow} />
          </div>
          <div
            className="container w-full mx-auto mb-4 absolute bottom-0"
            style={{ height: "5rem" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Row1;
