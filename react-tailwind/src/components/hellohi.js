import React, { Fragment } from "react";

import Lottie from "react-lottie";
import hi from "../assets/lottie/28826-hello-gilbert.json";

const HelloHi = () => {
  const hiLott = {
    loop: true,
    autoplay: true,
    animationData: hi,
    renderedSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <div className="bg-gray-200 w-full relative md:hidden">
        <div className="container mx-auto grid grid-cols-1">
          <div>
            <Lottie
              style={{ cursor: "default" }}
              isClickToPauseDisabled={true}
              options={hiLott}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full relative hidden md:block">
        <p className="text-6xl pt-64 pb-32 invisible">Hello world</p>
        <div className="absolute z-10 top-0 mx-auto grid grid-cols-1 px-32">
          <div>
            <Lottie
              style={{ cursor: "default" }}
              isClickToPauseDisabled={true}
              options={hiLott}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HelloHi;
