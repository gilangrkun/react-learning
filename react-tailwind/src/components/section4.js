import React, { Component } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import AOS from "aos";
import "aos/dist/aos.css";

import Lottie from "react-lottie";
import animation from "../assets/lottie/BloggingColored.json";

import Product from "../assets/img/products.png";
import Integration from "../assets/img/integration.png";
import Dashboard from "../assets/img/dashboard.png";
import Integrasi from "../assets/img/integrasi.png";
import Laporan from "../assets/img/laporan.png";
import Pesanan from "../assets/img/pasnan.png";
import Produk2 from "../assets/img/produk2.png";

class Section4 extends Component {
  constructor() {
    super();
    this.state = {
      isOpenDev: false,
      isOpenInt: false,
    };
  }

  onOpenModal = (name) => {
    if (name === 1) {
      this.setState({ isOpenDev: true });
    } else {
      this.setState({ isOpenInt: true });
    }
  };

  onCloseModal = (name) => {
    console.log(name);
    if (name === 1) {
      this.setState({ isOpenDev: false });
    } else {
      this.setState({ isOpenInt: false });
    }
  };

  render() {
    const { isOpenDev, isOpenInt } = this.state;
    AOS.init();

    const lottie1 = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const isiModal = (
      <div className="grid grid-cols-1 gap-16 md:p-10 font-audrey text-base">
        <div className="col-span-1 px-16">
          <p className="text-center font-semibold text-2xl">
            This is some pictures from <i>oms.detalase.com</i>
          </p>
        </div>
        <div className="col-span-1">
          <img className="rounded" src={Dashboard} alt="dashboard" />
          <p className="text-start">
            <i>pic: Dashboard</i>
          </p>
        </div>
        <div className="col-span-1">
          <img className="rounded" src={Pesanan} alt="pesanan" />
          <p className="text-start">
            <i>pic: Order Page</i>
          </p>
        </div>
        <div className="col-span-1">
          <img className="rounded" src={Produk2} alt="produk" />
          <p className="text-start">
            <i>pic: Product List</i>
          </p>
        </div>
        <div className="col-span-1">
          <img className="rounded" src={Laporan} alt="laporan" />
          <p className="text-start">
            <i>pic: Report Page</i>
          </p>
        </div>
        <div className="col-span-1">
          <img className="rounded" src={Integrasi} alt="integrasi" />
          <p className="text-start">
            <i>pic: Integration Setting</i>
          </p>
        </div>
      </div>
    );

    return (
      <div className="bg-white w-full relative">
        <div className="container mx-auto hidden md:block px-16 py-24 font-audrey text-xl">
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="col-span-2 py-4"
              >
                <Lottie
                  style={{ cursor: "default" }}
                  isClickToPauseDisabled={true}
                  options={lottie1}
                />
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="col-span-2 flex justify-center py-4"
              >
                <p className="font-bold text-5xl">
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
                onClick={() => this.onOpenModal(1)}
                data-aos="fade-up-right"
                data-aos-anchor-placement="center-bottom"
                className="col-span-2 flex justify-center py-4"
              >
                <div className="bg-green-300 max-w-sm rounded overflow-hidden shadow-2xl">
                  <img src={Product} alt="Order Management System" />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-2xl mb-2">
                      <i>Order Management System</i>
                    </div>
                    <p>
                      I develop web for Order Management System (OMS){" "}
                      <a
                        className="text-blue-600 hover:text-blue-800"
                        href="https://oms.detalase.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>oms.detalase.com</i>
                      </a>{" "}
                      with team.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #java
                    </span>
                    <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #react
                    </span>
                    <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #mongoDB
                    </span>
                  </div>
                </div>
              </div>
              <Modal
                open={isOpenDev}
                onClose={() => this.onCloseModal(1)}
                center
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
              >
                {isiModal}
              </Modal>
              <div className="col-span-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 m-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1"></div>
              <div
                onClick={() => this.onOpenModal(2)}
                data-aos="fade-up-left"
                data-aos-anchor-placement="center-bottom"
                className="col-span-2 flex justify-center py-4"
              >
                <div className="bg-indigo-300 max-w-sm rounded overflow-hidden shadow-2xl">
                  <img src={Integration} alt="Integration" />
                  <div className="px-6 py-4">
                    <div className="font-semibold text-2xl mb-2">
                      <i>Marketplace Integration</i>
                    </div>
                    <p>
                      Connecting our client's{" "}
                      <a
                        className="text-blue-600 hover:text-blue-800"
                        href="https://oms.detalase.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>oms.detalase.com</i>
                      </a>{" "}
                      to online marketplace by consuming data API.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #spring
                    </span>
                    <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #java
                    </span>
                    <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-base font-bold text-white mr-2 mb-2">
                      #API
                    </span>
                  </div>
                </div>
              </div>
              <Modal
                open={isOpenInt}
                onClose={() => this.onCloseModal(2)}
                center
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
              >
                {isiModal}
              </Modal>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 mx-auto md:hidden p-1">
          <div className="bg-gray-200 grid grid-cols-1 gap-8 font-audrey text-lg p-10">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="col-span-1 flex justify-center items-center p-3"
            >
              <p className="font-semibold text-center text-3xl">
                <i>What I've done so far: </i>
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="col-span-1"
            >
              <Lottie
                style={{ cursor: "default" }}
                isClickToPauseDisabled={true}
                options={lottie1}
              />
            </div>
            <div
              data-aos="fade-up"
              onClick={() => this.onOpenModal(1)}
              data-aos-anchor-placement="top-bottom"
              className="col-span-1 flex justify-center py-4"
            >
              <div className="bg-teal-500 max-w-sm rounded overflow-hidden shadow-2xl">
                <img src={Product} alt="Order Management System" />
                <div className="px-6 py-4">
                  <div className="font-semibold text-xl mb-2">
                    <i>Order Management System</i>
                  </div>
                  <p>
                    I develop web for Order Management System (OMS){" "}
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
                  <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #java
                  </span>
                  <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #react
                  </span>
                  <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #mongoDB
                  </span>
                </div>
              </div>
            </div>
            <Modal
              open={isOpenDev}
              onClose={() => this.onCloseModal(1)}
              center
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
            >
              {isiModal}
            </Modal>
            <div
              data-aos="fade-up"
              onClick={() => this.onOpenModal(2)}
              data-aos-anchor-placement="top-bottom"
              className="col-span-1 flex justify-center py-4"
            >
              <div className="bg-orange-500 max-w-sm rounded overflow-hidden shadow-2xl">
                <img src={Integration} alt="Integration" />
                <div className="px-6 py-4">
                  <div className="font-semibold text-xl mb-2">
                    <i>Marketplace Integration</i>
                  </div>
                  <p>
                    Connecting our client's{" "}
                    <a
                      className="text-blue-600 hover:text-blue-800"
                      href="https://oms.detalase.com"
                    >
                      <i>oms.detalase.com</i>
                    </a>{" "}
                    to online marketplace by consuming data API.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #spring
                  </span>
                  <span className="inline-block bg-orange-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #java
                  </span>
                  <span className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    #API
                  </span>
                </div>
              </div>
            </div>
            <Modal
              open={isOpenInt}
              onClose={() => this.onCloseModal(2)}
              center
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
            >
              {isiModal}
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
