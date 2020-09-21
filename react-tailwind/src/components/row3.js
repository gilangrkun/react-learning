import React, { Component } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";

import animation from "../assets/lottie/33502-programmer-man.json";

class Row3 extends Component {
  render() {
    AOS.init();

    const lottie1 = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="w-full bg-gray-200 font-DMmono font-normal text-xl relative">
        <div className="container mx-auto flex items-center pt-64 pb-64">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="ml-32"
            style={{ height: "22rem", width: "22rem" }}
          >
            <Lottie options={lottie1} />
          </div>
          <span className="bg-red-400 ml-10">
            <p>What can I do: </p>
          </span>
        </div>
      </div>
    );
  }
}

export default Row3;
