import React, { Component } from "react";

import Lottie from "react-lottie";
import animation from "./assets/lottie/221-infinite-rainbow.json";

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Background from "./components/background";
import HelloHi from "./components/hellohi";
import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }
  render() {
    const lottieLoading = {
      loop: true,
      autoplay: true,
      animationData: animation,
      renderedSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return this.state.isLoading === false ? (
      <div className="bg-gray-800 grid grid-rows-1 grid-cols-1 h-screen p-64">
        <Lottie options={lottieLoading} />
      </div>
    ) : (
      <div className="App">
        <Background />
        <Section1 />
        <HelloHi />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    );
  }
}

export default App;
