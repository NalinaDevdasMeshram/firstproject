// useLayoutEffect it is similar to useEffect but it is called before element mount to the ui

import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am useEffect");
  }, [count]);
  useLayoutEffect(() => {
    console.log("I am useLayoutEffect");
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello UseLayout Learning Concept</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count && <span>{count}</span>}
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}>
        -
      </button>
    </div>
  );
};

export default UseLayoutEffect;
