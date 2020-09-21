import React, { Component } from "react";
import Lottie from "react-lottie";
import lottie1 from "../assets/lottie/welcome3.json";
import AOS from "aos";
import "aos/dist/aos.css";

class Row2 extends Component {
  render() {
    AOS.init();

    const lott1 = {
      loop: true,
      autoplay: true,
      animationData: lottie1,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className="w-full font-DMmono font-normal text-xl relative">
        <div className="container mx-auto flex items-center pt-64 pb-64">
          <span
            className="flex-1 ml-32"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p>
              Hello, Everyone.. <br />
              I'm{" "}
              <i>
                <b>Gilang Riyadi Kuntiarso</b>
              </i>{" "}
              and I was born in January 20, 1997. I'm currently working in
              Jakarta (Indonesia) as a <i>Full Stack Developer</i>. I am always
              open to the better opportunities especially which can upgrade my
              skills in tech industry.
            </p>
          </span>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mr-32"
            style={{ height: "25rem", width: "25rem" }}
          >
            <Lottie options={lott1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Row2;
