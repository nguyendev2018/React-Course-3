import React, { useState, useEffect } from "react";
import ChildHookEffect from "./ChildHookEffect";

export default function DemoUseEffect(props) {
  let [count, setCount] = useState(1);
  let [number, setNumber] = useState(1);
  useEffect(() => {
    console.log("component DidMount");
  }, []);
  console.log("render");
  useEffect(() => {
    console.log("component DidUpdate");
  }, [number]);
  const handleIncreaser = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };
  return (
    <div>
      <h4 className="title">{number}</h4>
      <button onClick={handleIncreaser}>click</button>
      <button
        onClick={() => {
          let newCount = count + 1;
          setCount(newCount);
        }}
      >
        Change Count
      </button>
      {count === 1 ? <ChildHookEffect></ChildHookEffect> : ""}
    </div>
  );
}
