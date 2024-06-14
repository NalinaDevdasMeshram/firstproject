import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount,decrementCount } from "../ReduxConcept/Action";
const Counter =()=>{
    const count = useSelector((state)=>state.countReducer.count);
    const dispatch = useDispatch();
    const handleIncrement =() =>{
        dispatch(incrementCount());
    }
    const handleDecrement = ()=>{
        dispatch(decrementCount());
    }
 return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
</div>

    );
};
export default Counter;