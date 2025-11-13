// useCallback is a react hook which create the memoized function
// it means  when we use callback hook it  does not create  multiple instance of same function  when re-render happend
// instance of creating new instance of the function ,it provides the cache function on re-render of the component..
import { useCallback, useState } from "react";
import Header from "./Header";
const UseCallBack1 = () => {
  const [count, setCount] = useState(0);
  const newfn = useCallback(() => {}, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseCall Back Hook Concept</h1>
      <h1>
        <Header newfn={newfn} />
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};

export default UseCallBack1;
