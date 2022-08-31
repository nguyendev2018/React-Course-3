import React, { useState } from "react";

export default function DemoHookUseState() {
  let [state, setState] = useState({ like: 0 });
  const handleClick = () => {
    setState({ like: state.like + 1 });
  };
  return (
    <div>
      <p>{state.like}</p>
      <button
        onClick={() => {
          handleClick;
        }}
      >
        Click
      </button>
    </div>
  );
}
