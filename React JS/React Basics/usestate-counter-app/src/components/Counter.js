import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function resetHandler() {
    setCount(0);
  }
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => {
            count === 0 ? setCount(0) : setCount(count - 1);
          }}
        >
          <img
            src="./images/minus.png"
            width={"100px"}
            height={"100px"}
            alt=""
          />
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <img
            src="./images/plus.png"
            width={"100px"}
            height={"100px"}
            alt=""
          />
        </button>

        <button className="reset" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
