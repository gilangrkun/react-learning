import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

class Row5 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
    };
    return (
      <div
        className="w-full font-DMmono font-normal text-md relative"
        style={{ height: "30rem" }}
      >
        <Slider
          className="w-full h-full slick-dots flex max-h-full items-center bg-gray-700"
          {...settings}
        >
          <div className="bg-red-600 w-full h-full">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Row5;
