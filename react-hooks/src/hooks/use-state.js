import React, { useState } from "react";

const HookState = () => {
  const [name, setName] = useState(["Kuntiarso", "Gilang", "Riyadi"]);
  const [randName, setRandName] = useState(name[0]);

  const newName = () => {
    setRandName(name[Math.floor(Math.random() * 3)]);
  };

  return (
    <div>
      <p>{randName}</p>
      <button onClick={newName}>change name</button>
    </div>
  );
};

export default HookState;
