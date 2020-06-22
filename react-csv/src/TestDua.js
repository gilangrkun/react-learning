import React, { useState } from "react";

// react-hooks

const TestDua = () => {
  const [name, setName] = useState("kadkajdkj");
  const [Id, setId] = useState("28932");

  return (
    <div>
      <p>{name}</p>
      <p>{Id}</p>
    </div>
  );
};

export default TestDua;
