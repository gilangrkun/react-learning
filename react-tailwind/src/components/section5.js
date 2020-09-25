import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

class Section5 extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      infinite: true,
      speed: 200,
      arrows: false,
      pauseOnHover: true,
    };
    return (
      <div className="grid grid-rows-1 grid-cols-1 relative font-cormorant text-lg text-white md:text-xl">
        <div>
          <Slider {...settings}>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-indigo-900 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                  className="my-4 text-3xl md:text-5xl font-semibold text-center"
                >
                  <i>
                    "Tell me and I forget. Teach me and I remember.
                    <br />
                    Involve me and I teach."
                  </i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                >
                  - Benjamin Franklin
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-teal-900 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                  className="my-4 text-3xl md:text-5xl font-semibold text-center"
                >
                  <i>
                    "Nothing is impossible, the word itself says,
                    <br />
                    <span className="font-bold text-4xl md:text-6xl">
                      I'm Possible!
                    </span>
                    ."
                  </i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                >
                  - Audrey Hepburn
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-yellow-900 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                  className="my-4 text-3xl md:text-5xl font-semibold text-center"
                >
                  <i>"I would rather die of passion than of boredom."</i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  - Vincent van Gogh
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-red-900 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                  className="my-4 text-3xl md:text-5xl font-semibold text-center"
                >
                  <i>
                    "The way to get started is to quit talking and begin doing."
                  </i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  - Walt Disney
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-gray-800 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                  className="my-4 text-3xl md:text-5xl font-semibold text-center"
                >
                  <i>"Life is trying things to see if they work."</i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  - Ray Bradbury
                </small>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Section5;
