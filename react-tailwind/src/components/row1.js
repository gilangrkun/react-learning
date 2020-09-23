import React, { Component } from "react";

// lottie
import Lottie from "react-lottie";
import welcome from "../assets/lottie/9563-w-e-l-c-o-m-e.json";
import arrow from "../assets/lottie/23903-pointing-arrow.json";
import map from "../assets/lottie/270-map-animation.json";

class Row1 extends Component {
  render() {
    const welcomeLott = {
      loop: true,
      autoplay: true,
      animationData: welcome,
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

    const mapLott = {
      loop: true,
      autoplay: true,
      animationData: map,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="w-full relative">
        <div className="container mx-auto font-semibold font-cormorant text-lg">
          <div className="grid grid-cols-1 grid-rows-5 gap-4 px-64">
            <div className="flex justify-center text items-end">
              <p className="text-4xl text-white">
                <i>Hello, World..</i>
              </p>
            </div>
            <div className="col-span-1 row-span-4">
              <Lottie options={mapLott} />
            </div>
          </div>
          {/* <div className="w-full" style={{ height: "37rem" }}>
            <Lottie options={welcome} />
          </div>
          <div className="w-full mb-4" style={{ height: "5rem" }}>
            <Lottie options={arrow} />
          </div>
          <div
            className="container w-full mx-auto mb-4 absolute bottom-0"
            style={{ height: "5rem" }}
          ></div> */}
        </div>
      </div>
    );
  }
}

export default Row1;
