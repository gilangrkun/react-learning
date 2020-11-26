import React, { useState } from "react";

const HookStateBasic = () => {
  const [name, setName] = useState("Kuntiarso");

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={changeName} defaultValue={name} />
    </div>
  );
};

export default HookStateBasic;
