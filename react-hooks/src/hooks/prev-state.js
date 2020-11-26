import React, { useState } from "react";

const countInitial = () => {
  console.log("hello");
  return 4;
};

const HooksPrevState = () => {
  // hello will print all the time when we click the function
  //   const [state, setState] = useState(countInitial());

  // hello will print once at the beginning
  const [state, setState] = useState(() => countInitial());

  const decrease = () => {
    setState((prevState) => prevState - 1);
  };

  const increase = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>{state}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default HooksPrevState;
