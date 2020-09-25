import React, { Component, Fragment } from "react";

import AOS from "aos";

import Lottie from "react-lottie";
import list from "../assets/lottie/9935-list.json";
import popper from "../assets/lottie/12389-happy-holidays.json";
import popper2 from "../assets/lottie/24708-party-popper.json";

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
          <div className="bg-white container mx-auto hidden md:grid md:grid-cols-2 md:gap-4 font-audrey text-base px-32 py-24">
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
              <div className="text-lg">
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
                        rel="noopener noreferrer"
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

          <div className="bg-white md:hidden grid grid-cols-1 gap-8 font-audrey text-lg p-10">
            <div
              data-aos="fade-in"
              data-aos-anchor-placement="bottom-bottom"
              className="px-4"
            >
              <p className="font-semibold text-3xl text-center">
                <i>My programming experiences: </i>
              </p>
            </div>
            <div className="grid grid-cols-1">
              <div
                data-aos="fade-in"
                data-aos-anchor-placement="bottom-bottom"
                className="col-span-1"
              >
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={listLott}
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="col-span-1 text-sm px-12 flex items-center">
                <div>
                  <ul className="list-disc list-outside">
                    <li
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p>Full Stack Bootcamp at Praxis Academy</p>
                      <small>2020.02.28 - 2020.06.28</small>
                    </li>
                    <br />
                    <li
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p>
                        Programmer at{" "}
                        <a
                          href="https://www.cronos.id"
                          alt="Cronos.id"
                          target="_blank"
                          rel="noopener noreferrer"
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

        <div className="bg-gray-200 w-full relative p-1">
          <div className="bg-gray-200 hidden md:grid md:grid-cols-2 font-audrey text-lg mt-12 p-5">
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="col-span-1 grid grid-cols-4 gap-4"
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
            <div className="col-span-2 flex flex-col text-center font-semibold font-cormorant text-6xl p-8">
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <i>Thank</i>
              </p>
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <i>you</i>
              </p>
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <i>for</i>
              </p>
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <i>visiting!</i>
              </p>
            </div>
          </div>

          <div className="bg-gray-200 md:hidden grid grid-cols-1 font-audrey p-10">
            <div
              data-aos="fade-in"
              data-aos-anchor-placement="bottom-bottom"
              className="flex justify-center"
            >
              <div>
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={popperLottMobile}
                />
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-anchor-placement="bottom-bottom"
              className="flex justify-center"
            >
              <div>
                <img src={Avatar} alt="Gilang Riyadi Kuntiarso" />
              </div>
            </div>
            <div className="flex flex-col text-center py-16 font-semibold font-cormorant text-5xl">
              <p data-aos="fade-in" data-aos-anchor-placement="bottom-bottom">
                <i>Thank</i>
              </p>
              <p data-aos="fade-in" data-aos-anchor-placement="bottom-bottom">
                <i>you</i>
              </p>
              <p data-aos="fade-in" data-aos-anchor-placement="bottom-bottom">
                <i>for</i>
              </p>
              <p data-aos="fade-in" data-aos-anchor-placement="bottom-bottom">
                <i>visiting!</i>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Section6;
