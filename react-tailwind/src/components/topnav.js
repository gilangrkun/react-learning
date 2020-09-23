import React, { Component } from "react";

// lottie
import Lottie from "react-lottie";
import cuteOwl from "../assets/lottie/cuteOwl.json";

class Topnav extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (window.scrollY > 693) {
  //     document.querySelector(".navbar").className =
  //       "navbar scroll fixed z-10 w-full bg-white shadow-lg invisible sm:visible";
  //   } else {
  //     document.querySelector(".navbar").className =
  //       "navbar fixed z-10 w-full invisible sm:visible";
  //   }
  // };

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
      <nav className="bg-indigo-800 navbar container fixed z-10 invisible sm:visible">
        <div className="bg-red-400 flex flex-col flex-wrap font-cormorant font-bold text-xl">
          <span
            className="tracking-light bg-yellow-500"
            style={{ height: "64", width: "64" }}
          >
            <a className="text-green-400 hover:text-green-700" href="#">
              Profile
            </a>
          </span>
          <span className="tracking-light bg-yellow-500">
            <a className="text-green-400 hover:text-green-700" href="#">
              Portfolio
            </a>
          </span>
          <div className="tracking-light bg-yellow-500">
            <Lottie options={defaultOptions} height={40} width={40} />
          </div>
          <span className="tracking-light bg-yellow-500">
            <a className="text-green-400 hover:text-green-700" href="#">
              Skills
            </a>
          </span>
          <span className="tracking-light bg-yellow-500">
            <a className="text-green-400 hover:text-green-700" href="#">
              Contact
            </a>
          </span>
        </div>
      </nav>
    );
  }
}

export default Topnav;
