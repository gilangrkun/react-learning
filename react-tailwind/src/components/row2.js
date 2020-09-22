import React, { Component } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
// lottie
import Lottie from "react-lottie";
import animation from "../assets/lottie/welcome3.json";
import animation2 from "../assets/lottie/33117-sparrow.json";

class Row2 extends Component {
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
      <div className="w-full relative">
        <div className="container mx-auto p-32">
          <div className="grid grid-cols-3 gap-4 font-cormorant text-lg">
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
              <Lottie options={lott1} />
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
              <Lottie options={lott2} height={200} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Row2;
