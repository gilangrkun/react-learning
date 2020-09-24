import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Lottie from "react-lottie";
import animation from "../assets/lottie/2454-personal-character.json";
import animation2 from "../assets/lottie/33117-sparrow.json";

class Section2 extends Component {
  render() {
    AOS.init();

    const lott1 = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const lott2 = {
      loop: true,
      autoplay: true,
      animationData: animation2,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="bg-white w-full relative">
        <div className="container hidden sm:block mx-auto px-32 py-24">
          <div className="grid grid-cols-3 gap-4 font-audrey text-lg">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="col-span-1 flex items-center"
            >
              <p className="font-bold text-4xl">
                <i>Hi, there!</i>
              </p>
            </div>
            <div className="col-span-1"></div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-1 row-span-2"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={lott1}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-span-2 flex items-center"
            >
              <p>
                I'm{" "}
                <i>
                  <b>Gilang Riyadi Kuntiarso</b>
                </i>{" "}
                and I was born in January 20, 1997.
                <br />
                I'm currently working in Jakarta (Indonesia) as a{" "}
                <i>Full Stack Developer</i>.
                <br />
                Although this isn't my field of study, but being a programmer is
                my new passion.
                <br />I always open to any better opportunities especially which
                can upgrade my skills in tech industry.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="col-span-3"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={lott2}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 sm:hidden p-1">
          <div className="bg-gray-300 rounded-lg shadow-inner grid grid-cols-4 gap-4 font-audrey text-base p-10">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="col-span-2 row-span-2 flex items-center"
            >
              <p className="font-bold text-2xl">
                <i>Hi, there!</i>
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-2 row-span-2"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={lott1}
              />
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="col-span-4 flex items-center"
            >
              <p className="text-justify">
                I'm{" "}
                <i>
                  <b>Gilang Riyadi Kuntiarso</b>
                </i>{" "}
                and I was born in January 20, 1997. Currently, I am working in
                Jakarta (Indonesia) as a <i>Full Stack Developer</i>. Although
                this isn't my field of study, but being a programmer is my new
                passion. I always open to any better opportunities especially
                which can upgrade my skills in tech industry.
              </p>
            </div>
            <div
              data-aos="fade-out"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="col-span-4"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={lott2}
                height={125}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
