import React, { Component } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";

import animation from "../assets/lottie/BloggingColored.json";
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
      <div className="w-full relative">
        <div className="container mx-auto px-32 py-24 font-cormorant text-lg">
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-span-2 py-4"
              >
                <Lottie options={lottie1} />
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-span-2 flex justify-center py-4"
              >
                <p className="font-bold text-4xl">
                  <i>What I've done so far: </i>
                </p>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up-right"
                data-aos-offset="250"
                data-aos-duration="750"
                className="col-span-2 flex justify-center py-4"
              >
                <div className="bg-green-300 max-w-sm rounded overflow-hidden shadow-2xl">
                  <img src={Product} alt="Order Management System" />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-xl mb-2">
                      <i>Order Management System</i>
                    </div>
                    <p>
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
                    <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #java
                    </span>
                    <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #react
                    </span>
                    <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #mongoDB
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up-left"
                data-aos-offset="250"
                data-aos-duration="750"
                className="col-span-2 flex justify-center py-4"
              >
                <div className="bg-indigo-300 max-w-sm rounded overflow-hidden shadow-2xl">
                  <img src={Integration} alt="Integration" />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-xl mb-2">
                      <i>Marketplace Integration</i>
                    </div>
                    <p>
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
                    <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #spring
                    </span>
                    <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #java
                    </span>
                    <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">
                      #API
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Row4;
