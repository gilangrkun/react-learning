import React, { Component } from "react";
import Lottie from "react-lottie";
import cuteOwl from "../assets/lottie/cuteOwl.json";

class Topnav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 694) {
      document.querySelector(".navbar").className =
        "navbar scroll font-DMmono fixed z-10 w-full bg-white shadow-lg";
    } else {
      document.querySelector(".navbar").className =
        "navbar font-DMmono fixed z-10 w-full";
    }
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: cuteOwl,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <nav className="navbar font-DMmono fixed z-10 w-full">
        <div className="flex items-center justify-around flex-wrap container mx-auto font-normal text-xl">
          <span className="tracking-light">
            <a class="text-green-500 hover:text-green-800" href="#">
              Profile
            </a>
          </span>
          <span className="tracking-light">
            <a class="text-green-500 hover:text-green-800" href="#">
              Portfolio
            </a>
          </span>
          <div className="mr-6 flex items-center flex-shrink-0">
            <Lottie options={defaultOptions} height={40} width={60} />
          </div>
          <span className="tracking-light">
            <a class="text-green-500 hover:text-green-800" href="#">
              Skills
            </a>
          </span>
          <span className="tracking-light">
            <a class="text-green-500 hover:text-green-800" href="#">
              Contact
            </a>
          </span>
        </div>
      </nav>
    );
  }
}

export default Topnav;
