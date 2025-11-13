// useReducer is a react hook  userReducer hook is similar to useState hook  but instead of providing state and setter function it provides the state and dispatch function
// useReducer hook accept two arguments 1. reducer function 2.intial state AND it return current state and dispatch method

import { useReducer } from "react";

const UseReducerHook = () => {
  const intialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "Decrement": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Reducer Concept</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </div>
  );
};

export default UseReducerHook;
