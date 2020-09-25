import React from "react";

import Lottie from "react-lottie";
import arrowUp from "../assets/lottie/10345-up-arrows.json";

const ScrollToTop = () => {
  const arrowLott = {
    loop: true,
    autoplay: true,
    animationData: arrowUp,
    renderedSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container relative">
      <div
        onClick={scrollToTop}
        className="absolute flex items-center font-audrey text-base text-black bottom-0 right-0"
      >
        <p className="invisible">click to </p>
        <Lottie isClickToPauseDisabled={true} options={arrowLott} />
      </div>
    </div>
  );
};

export default ScrollToTop;
