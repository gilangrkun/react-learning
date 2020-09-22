import React from "react";
import Topnav from "./components/topnav";
import Row1 from "./components/row1";
import Row2 from "./components/row2";
import Row3 from "./components/row3";
import Row4 from "./components/row4";
import Row5 from "./components/row5";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  );
}

export default App;
