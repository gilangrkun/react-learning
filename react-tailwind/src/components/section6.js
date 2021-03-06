import React, { Component, Fragment } from "react";

// aos
import AOS from "aos";
// lottie
import Lottie from "react-lottie";
import list from "../assets/lottie/9935-list.json";
import popper from "../assets/lottie/12389-happy-holidays.json";
import popper2 from "../assets/lottie/24708-party-popper.json";
// img
import Avatar from "../assets/img/kuntiaCrop.png";

class Section6 extends Component {
  render() {
    AOS.init();

    const listLott = {
      loop: true,
      autoplay: true,
      animationData: list,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const popperLott = {
      loop: true,
      autoplay: true,
      animationData: popper,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const popperLottMobile = {
      loop: true,
      autoplay: true,
      animationData: popper2,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Fragment>
        <div className="bg-white w-full relative p-1">
          {/* for laptop or larger screen */}
          <div className="bg-white container mx-auto hidden md:grid md:grid-cols-2 md:gap-4 font-cormorant text-base p-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-span-1"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={listLott}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-evenly items-center">
              <div data-aos="fade-up" data-aos-duration="1000" className="px-4">
                <p className="font-semibold text-4xl text-center">
                  <i>My programming experiences: </i>
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="text-lg"
              >
                <ul className="list-disc list-outside">
                  <li>
                    <p>Full Stack Bootcamp at Praxis Academy</p>
                    <small>2020.02.28 - 2020.06.28</small>
                  </li>
                  <br />
                  <li>
                    <p>
                      Programmer at{" "}
                      <a
                        href="https://www.cronos.id"
                        alt="Cronos.id"
                        target="_blank"
                        className="text-blue-900 hover:text-blue-700 font-semibold"
                      >
                        PT. Cronos.id
                      </a>
                    </p>
                    <small>2020.07.07 - now</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* for mobile */}
          <div className="bg-white rounded-lg shadow-inner md:hidden grid grid-cols-1 gap-4 font-cormorant text-base p-5">
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="250"
              className="px-4"
            >
              <p className="font-semibold text-2xl text-center">
                <i>My programming experiences: </i>
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="col-span-1"
              >
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={listLott}
                />
              </div>
              <div className="col-span-1 text-sm p-4 flex items-center">
                <div>
                  <ul className="list-disc list-outside">
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="250"
                    >
                      <p>Full Stack Bootcamp at Praxis Academy</p>
                      <small>2020.02.28 - 2020.06.28</small>
                    </li>
                    <br />
                    <li
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      <p>
                        Programmer at{" "}
                        <a
                          href="https://www.cronos.id"
                          alt="Cronos.id"
                          target="_blank"
                          className="text-blue-900 hover:text-blue-700 font-semibold"
                        >
                          PT. Cronos.id
                        </a>
                      </p>
                      <small>2020.07.07 - now</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* avatar */}
        <div className="bg-orange-100 w-full relative p-1">
          {/* avatar larger screen */}
          <div className="bg-orange-100 hidden sm:grid sm:grid-cols-2 font-cormorant text-base mt-12 p-5">
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="250"
              className=" col-span-1 grid grid-cols-4 gap-4"
            >
              <div className="col-span-1"></div>
              <div className="col-span-3">
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={popperLott}
                />
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="250"
              className="col-span-1 grid grid-cols-2 gap-4"
            >
              <div className="col-span-1">
                <img
                  className="min-w-full min-h-full"
                  src={Avatar}
                  alt="Gilang Riyadi Kuntiarso"
                />
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          {/* avatar for mobile */}
          <div className="bg-orange-100 rounded-lg shadow-inner sm:hidden grid grid-cols-1 gap-4 font-cormorant text-base p-5">
            <div
              // data-aos="fade-in"
              // data-aos-duration="1000"
              // data-aos-delay="500"
              className="flex justify-center py-12"
            >
              <div className="bg-indigo-700">
                <img src={Avatar} alt="Gilang Riyadi Kuntiarso" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Section6;
