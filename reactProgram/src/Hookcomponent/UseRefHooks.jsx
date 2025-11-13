// useRef is a react hook which capture elements reference and store it to the variable..
// useRef is a  react hook  that allow us to  create mutable varaible which will not  re-rendering the components..
// useRef is also used for accessing the DOM elements

import { useRef, useState, useEffect } from "react";
const UseRefHooks = () => {
  const [count, setCount] = useState(0);
  const Refcount = useRef(0);
  console.log("useRef count is:", Refcount);
  useEffect(() => {
    Refcount.current = Refcount.current + 1;
  });
  // const inputElement = useRef();
  // const btnclick = () => {
  //   inputElement.current.style.backgroundColor = "red";
  // };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseRef Hooks Concept</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <h2>Render Count:{Refcount.current}</h2>
      {/* <input type="text" ref={inputElement} />  // accessing DOM element 
      <button onClick={btnclick}> Click Here!</button> */}
    </div>
  );
};

export default UseRefHooks;
