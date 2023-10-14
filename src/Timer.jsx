import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(60); // Initial time in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(60); // Reset to the initial time (60 seconds in this case)
  };

  return (
    <div>
      <div>
        <h2>Countdown Timer</h2>
        <p>Time Remaining: {time} seconds</p>
      </div>
      <div>
        <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
