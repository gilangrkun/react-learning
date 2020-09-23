import React, { Component } from "react";

// lottie
import Lottie from "react-lottie";
import landing from "../assets/lottie/23583-atomic-design-web-size.json";
import arrow from "../assets/lottie/27308-arrow-scroll-down.json";
import hello from "../assets/lottie/28826-hello-gilbert.json";

// img
import Avatar from "../assets/img/kuntiaCrop.png";

// aos
import AOS from "aos";

class Section1 extends Component {
  render() {
    AOS.init();

    const landingLott = {
      loop: true,
      autoplay: true,
      animationData: landing,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const arrowLott = {
      loop: true,
      autoplay: true,
      animationData: arrow,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const helloLott = {
      loop: true,
      autoplay: true,
      animationData: hello,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        className="w-full relative font-semibold font-cormorant text-base"
        style={{ backgroundColor: "#3D3D3D" }}
      >
        <div>
          <div>
            <Lottie
              style={{ cursor: "default" }}
              isClickToPauseDisabled={true}
              options={landingLott}
            />
          </div>
          <div className="container mx-auto flex justify-end invisible sm:visible">
            <div
              className="rounded-t-lg"
              style={{ backgroundColor: "#6F6EE7" }}
            >
              <Lottie
                isClickToPauseDisabled={true}
                options={arrowLott}
                height={64}
                width={64}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full relative">
          <div className="container mx-auto grid grid-cols-1 grid-rows-1 p-1 sm:p-0">
            <div className="flex justify-center bg-white rounded-lg sm:rounded-none shadow-inner sm:shadow-none py-12">
              <div data-aos="zoom-up" data-aos-duration="1000">
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={helloLott}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-purple-300 w-full relative">
          <div className="container grid grid-cols-1 grid-rows-1 p-1">
            <div className="flex justify-center bg-purple-300 rounded-lg shadow-inner py-12">
              <div>
                <img src={Avatar} alt="Gilang Riyadi Kuntiarso" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Section1;
