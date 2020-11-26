import React, { useState } from "react";

const HookState2 = () => {
  const [count, setCount] = useState(0);

  const mines = () => {
    setCount((prevCount) => (prevCount === 0 ? prevCount : prevCount - 1));
  };

  const ples = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={mines}>-</button>
      <p>{count}</p>
      <button onClick={ples}>+</button>
    </div>
  );
};

export default HookState2;
