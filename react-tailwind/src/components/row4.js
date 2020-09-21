import React, { Component } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";

import animation from "../assets/lottie/28481-working-together.json";
import Product from "../assets/img/products.png";
import Integration from "../assets/img/integration.png";

class Row4 extends Component {
  render() {
    AOS.init();

    const lottie1 = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="w-full font-DMmono font-normal text-xl relative">
        <div className="container mx-auto flex flex-col items-center pt-32 pb-32">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ width: "30rem", height: "30rem" }}
          >
            <Lottie options={lottie1} />
          </div>
          <p className="text-2xl">
            <u>What I've done so far:</u>
          </p>
          <br />
          <br />
          <br />
          <span className="flex w-full justify-around">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={Product}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  Order Management System
                </div>
                <p className="text-gray-700 text-base">
                  I do develop web for Order Management System (OMS){" "}
                  <a
                    className="text-blue-600 hover:text-blue-800"
                    href="https://oms.detalase.com"
                  >
                    <i>oms.detalase.com</i>
                  </a>{" "}
                  with team.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #java
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #react
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #mongoDB
                </span>
              </div>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={Integration}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  Marketplace Integration
                </div>
                <p className="text-gray-700 text-base">
                  Connecting our client's OMS,{" "}
                  <a
                    className="text-blue-600 hover:text-blue-800"
                    href="https://oms.detalase.com"
                  >
                    <i>oms.detalase.com</i>
                  </a>
                  , to online marketplace by integrating data API.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #spring
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #java
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #JSON
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Row4;
