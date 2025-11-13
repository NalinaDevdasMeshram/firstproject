// useState is a react hook which creates an "state variable" and it help us to track state in component and updates the user interface when the state is changes...
import { useState } from "react";
const UseState1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const Decrement = () => {
    setCount((prevstate) => (prevstate > 0 ? prevstate - 1 : prevstate));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseState Hook </h1>
      <button onClick={increment}>+</button>
      {count && <span style={{ margin: "15px" }}>{count}</span>}
      <button onClick={Decrement}>-</button>
    </div>
  );
};

export default UseState1;
