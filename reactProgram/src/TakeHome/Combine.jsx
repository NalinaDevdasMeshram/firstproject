import { useState } from "react";
import Buttons from "./Buttons";
import Dispaly from "./Dispaly";

const Combine = () => {
  const [count, setCount] = useState("0");
  const handleIncrement = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const handleDecrement = () => {
    setCount((prevstate) => prevstate - 1);
  };
  return (
    <div>
      <Buttons onClick={handleIncrement} text="+" />
      <Dispaly displayValue={count} />
      <Buttons onClick={handleDecrement} text="-" />
    </div>
  );
};

export default Combine;
