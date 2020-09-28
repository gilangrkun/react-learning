import React, { Component } from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaWhatsappSquare,
  FaTelegramPlane,
} from "react-icons/fa";

import AOS from "aos";

import "../styles.css";
import ScrollToTop from "./scrolltop";

class Footer extends Component {
  render() {
    AOS.init();
    return (
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="w-full relative font-semibold font-cormorant text-xl"
        style={{ backgroundColor: "#c1b9b3", color: "#444240" }}
      >
        <div className="container mx-auto hidden md:grid md:grid-cols-4 md:gap-4 py-32">
          <div className="col-span-4 font-audrey flex justify-center">
            <p>Reach me everywhere: </p>
          </div>
          <div className="col-span-4 font-audrey flex justify-center">
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                twitter
              </span>
              <a
                href="https://twitter.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="hover:text-twitter" size={32} />
              </a>
            </div>
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                facebook
              </span>
              <a
                href="https://www.facebook.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="hover:text-facebook" size={32} />
              </a>
            </div>
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                linked-in
              </span>
              <a
                href="https://www.linkedin.com/in/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-linkedIn" size={32} />
              </a>
            </div>
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                github
              </span>
              <a
                href="https://github.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="hover:text-github" size={32} />
              </a>
            </div>
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                whatsapp
              </span>
              <a
                href="https://wa.me/6282190780310?text=Hi!%20you%20can%20ask%20anything%20to%20me%20here."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className="hover:text-whatsapp" size={32} />
              </a>
            </div>
            <div className="m-2 tooltip">
              <span className="tooltip-text bg-blue-200 py-1 px-4 -mt-10 lg:-mt-10 rounded">
                telegram
              </span>
              <a
                href="https://t.me/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="hover:text-telegram" size={32} />
              </a>
            </div>
          </div>
          <div className="col-span-1 invisible">Hello world</div>
          <div className="col-span-2 grid grid-cols-11 gap-2">
            <div className="col-span-5 flex justify-end items-center font-audrey">
              <p>gilang.grk17@gmail.com</p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div style={{ backgroundColor: "#444240" }}>
                <p className="invisible">|</p>
              </div>
            </div>
            <div className="col-span-5 flex justify-start items-center font-audrey">
              <p>
                Privacy <span className="font-serif">&copy;</span> 2020
                Kuntiarso
              </p>
            </div>
          </div>
          <div className="col-span-1 invisible">Hello world</div>
          <div className="col-span-4 flex justify-center font-audrey text-6xl">
            <p>Gilang Riyadi Kuntiarso</p>
          </div>
        </div>

        <div className="container mx-auto md:hidden grid grid-cols-1 gap-4 py-32">
          <div className="col-span-1 font-audrey flex justify-center">
            <p>Reach me everywhere: </p>
          </div>
          <div className="col-span-1 font-audrey flex justify-center">
            <div className="m-1">
              <a
                href="https://twitter.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="text-twitter" size={28} />
              </a>
            </div>
            <div className="m-1">
              <a
                href="https://www.facebook.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="text-facebook" size={28} />
              </a>
            </div>
            <div className="m-1">
              <a
                href="https://www.linkedin.com/in/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-linkedIn" size={28} />
              </a>
            </div>
            <div className="m-1">
              <a
                href="https://github.com/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="text-github" size={28} />
              </a>
            </div>
            <div className="m-1">
              <a
                href="https://wa.me/6282190780310?text=Hi!%20you%20can%20ask%20anything%20to%20me%20here."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className="text-whatsapp" size={28} />
              </a>
            </div>
            <div className="m-1">
              <a
                href="https://t.me/kuntiarso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="text-telegram" size={28} />
              </a>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <div className="col-span-1 flex justify-center font-audrey">
              <p>
                gilang.grk17<span className="font-serif">@</span>gmail.com
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-1" style={{ backgroundColor: "#444240" }}>
                <p className="invisible">Privacy &copy; 2020 Kuntiarso</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center font-audrey">
              <p>
                Privacy <span className="font-serif">&copy;</span> 2020
                Kuntiarso
              </p>
            </div>
          </div>
          <div className="col-span-1 flex justify-center font-audrey text-center pt-16 text-5xl">
            <p>Gilang Riyadi Kuntiarso</p>
          </div>
        </div>
        <ScrollToTop />
      </div>
    );
  }
}

export default Footer;
