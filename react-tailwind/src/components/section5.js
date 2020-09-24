import React, { Component } from "react";

// carousel
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
      <div className="grid grid-rows-1 grid-cols-1 relative font-cormorant text-base">
        <div>
          <Slider {...settings}>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-purple-200 shadow-inner flex flex-col justify-center items-center"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl font-semibold"
                >
                  <i>"Hello world"</i>
                </p>
                <small data-aos="zoom-in" data-aos-duration="750">
                  - Gilang Riyadi Kuntiarso
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-green-200 shadow-inner flex flex-col justify-center items-center"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl font-semibold"
                >
                  <i>"Hello world"</i>
                </p>
                <small data-aos="zoom-in" data-aos-duration="750">
                  - Gilang Riyadi Kuntiarso
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-orange-200 shadow-inner flex flex-col justify-center items-center"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl font-semibold"
                >
                  <i>"Hello world"</i>
                </p>
                <small data-aos="zoom-in" data-aos-duration="750">
                  - Gilang Riyadi Kuntiarso
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-gray-200 shadow-inner flex flex-col justify-center items-center"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl font-semibold"
                >
                  <i>"Hello world"</i>
                </p>
                <small data-aos="zoom-in" data-aos-duration="750">
                  - Gilang Riyadi Kuntiarso
                </small>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-1">
              <div
                className="bg-indigo-200 shadow-inner flex flex-col justify-center items-center"
                style={{ height: "30rem" }}
              >
                <p
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  className="my-4 text-2xl font-semibold"
                >
                  <i>"Hello world"</i>
                </p>
                <small data-aos="zoom-in" data-aos-duration="750">
                  - Gilang Riyadi Kuntiarso
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
