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
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false,
      focusOnSelect: true,
    };
    return (
      <div className="grid grid-rows-1 grid-cols-1 relative font-cormorant text-base md:text-lg">
        <div>
          <Slider {...settings}>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-purple-300 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl md:text-4xl font-semibold text-center"
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
                  data-aos-duration="750"
                >
                  - Benjamin Franklin
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-green-300 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl md:text-4xl font-semibold text-center"
                >
                  <i>
                    "Nothing is impossible, the word itself says,
                    <br />
                    <span className="font-bold text-3xl md:text-5xl">
                      I'm Possible!
                    </span>
                    ."
                  </i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-duration="750"
                >
                  - Audrey Hepburn
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-orange-300 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl md:text-4xl font-semibold text-center"
                >
                  <i>"I would rather die of passion than of boredom."</i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-duration="750"
                >
                  - Vincent van Gogh
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-gray-400 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl md:text-4xl font-semibold text-center"
                >
                  <i>
                    "The way to get started is to quit talking and begin doing."
                  </i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-duration="750"
                >
                  - Walt Disney
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-indigo-400 shadow-inner flex flex-col justify-center items-center px-10"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl md:text-4xl font-semibold text-center"
                >
                  <i>"Life is trying things to see if they work."</i>
                </p>
                <small
                  className="font-audrey"
                  data-aos="zoom-in"
                  data-aos-duration="750"
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
