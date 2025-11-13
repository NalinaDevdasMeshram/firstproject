// UseEffect is the react hook it is get triggered whenever is changes
// useEffect is react hook allow us to check the side Effect

import { useEffect, useState } from "react";

const UseEffects2 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseEffect Hoook</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <span>{value}</span>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <h2>I have rendereds {count} times!</h2>
    </div>
  );
};

export default UseEffects2;
