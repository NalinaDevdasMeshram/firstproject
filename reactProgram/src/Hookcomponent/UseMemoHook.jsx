// useMemo is a react hook which return the memoized the value (this means it caching a value so that it does't need to be recalculation )
// this can be improve the perofrmance of the application

import { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const cubeNum = (nums) => {
    console.log("calculation Done !!");
    return Math.pow(nums, 3);
  };
  const result = useMemo(() => cubeNum(number), [number]);
  // const res = cubeNum(number);
  // console.log(res);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseMemoHook</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1> Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter++
      </button>
      <h2> count: {counter}</h2>
    </div>
  );
};

export default UseMemoHook;
