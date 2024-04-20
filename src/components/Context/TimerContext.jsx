import React, { createContext, useEffect, useState } from "react";

const TimerContext = createContext({
  remainingTime: 0,
  isPaused: true,
  setRemainingTime: () => {},
  setIsPaused: () => {},
  resetTimer: () => {},
});

export const TimerProvider = ({ children, timer }) => {
  const [remainingTime, setRemainingTime] = useState(25);
  const [isPaused, setIsPaused] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      const id = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused, intervalId]);

  useEffect(() => {
    if (remainingTime === 0) {
      setIsPaused(true);
    }
  }, [remainingTime]);

  const resetTimer = () => {
    setRemainingTime(timer * 60);
    setIsPaused(true);
    clearInterval(intervalId);
  };

  return (
    <TimerContext.Provider
      value={{
        remainingTime,
        isPaused,
        setRemainingTime,
        setIsPaused,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
