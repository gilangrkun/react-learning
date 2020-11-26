import React, { useState } from "react";

const HookPrevState2 = () => {
  const [state, setState] = useState({ count: 0, name: "Tulis nama kamu" });

  const decrease = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const increase = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  const changeName = (e) => {
    setState((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>{state.count}</p>
      <button onClick={increase}>+</button>
      <br />
      <p>{state.name}</p>
      <input type="text" onChange={changeName} defaultValue={state.name} />
    </div>
  );
};

export default HookPrevState2;
