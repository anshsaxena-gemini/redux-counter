import React from "react";
import Card from "../UI/Card";
import ForwardCounter from "../customHooks/ForwardCounter";
import BackwardCounter from "../customHooks/BackwardCounter";

const Counter = () => {
  return (
    <div>
      <ForwardCounter />

      <BackwardCounter />
    </div>
  );
};

export default Counter;
