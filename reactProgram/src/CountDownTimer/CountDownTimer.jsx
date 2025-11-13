import { useEffect, useRef, useState } from "react";
import "./CountDown.css";
const CountDownTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPuased, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleClick = (e) => {
    setTimer(parseInt(e.target.value * 60));
  };
  const formattedTime = () => {
    const hr = String(Math.floor(timer / 3600)).padStart(2, "0");
    const min = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
    const sec = String(timer % 60).padStart(2, "0");
    return `${hr}:${min}:${sec}`;
  };
  const handleBtn = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePaused = () => {
    setIsPaused(!isPuased);
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };
  useEffect(() => {
    if (isActive && !isPuased && timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else if (timer === 0) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isActive, isPuased, timer]);
  return (
    <div>
      <h3>CountDownTimer</h3>
      <input
        className="containerBox"
        type="number"
        placeholder="enter the time here"
        onChange={handleClick}
      />
      <div className="show-timer">{formattedTime()}</div>
      <div>
        <button onClick={handleBtn} disabled={isActive && !isPuased}>
          Start
        </button>
        <button onClick={handlePaused} disabled={!isActive}>
          {isPuased ? "Resume" : "Paused"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
