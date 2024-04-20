import React, { useState, createContext, useContext } from "react";

const TimerSettingsContext = createContext();

export const TimerSettingsProvider = ({ children }) => {
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);

  return (
    <TimerSettingsContext.Provider
      value={{
        pomodoroDuration,
        setPomodoroDuration,
        shortBreakDuration,
        setShortBreakDuration,
        longBreakDuration,
        setLongBreakDuration,
      }}
    >
      {children}
    </TimerSettingsContext.Provider>
  );
};

export const useTimerSettings = () => useContext(TimerSettingsContext);
