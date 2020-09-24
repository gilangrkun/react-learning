import React, { Component } from "react";

// lottie
import Lottie from "react-lottie";
import landing from "../assets/lottie/23583-atomic-design-web-size.json";

class Background extends Component {
  render() {
    const landingLott = {
      loop: true,
      autoplay: true,
      animationData: landing,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        className="w-full h-screen font-semibold font-cormorant text-base"
        style={{ backgroundColor: "#3D3D3D" }}
      >
        <div>
          <Lottie
            style={{ cursor: "default" }}
            isClickToPauseDisabled={true}
            options={landingLott}
          />
        </div>
      </div>
    );
  }
}

export default Background;
