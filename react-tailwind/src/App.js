import React, { useState, useEffect } from "react";

// lottieLoading
import Lottie from "react-lottie";
import animation from "./assets/lottie/221-infinite-rainbow.json";

// content
// import Topnav from "./components/topnav";
// import Row1 from "./components/row1";
// import Row2 from "./components/row2";
// import Row3 from "./components/row3";
// import Row4 from "./components/row4";
// import Row5 from "./components/row5";

// content revision
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Background from "./components/background";
import HelloHi from "./components/hellohi";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  //lottie
  const lottieLoading = {
    loop: true,
    autoplay: true,
    animationData: animation,
    renderedSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return loading === false ? (
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

export default App;
