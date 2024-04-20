import React, { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import Hero from "./components/pages/Hero";
import { FaGear } from "react-icons/fa6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/pages/SharedLayout";
import Error from "./components/pages/Error";
import Longbreak from "./components/pages/Longbreak";
import Shortbreak from "./components/pages/Shortbreak";
import Settings from "./components/pages/Settings";
import { TimerProvider } from "./components/Context/TimerContext";
import Navbar from "./components/Navbar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [active, setActive] = useState("work");

  useEffect(() => {
    // console.log(active);
  }, [active]);

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Hero
        active={active}
        setActive={setActive}
        workDuration={workDuration}
        shortBreakDuration={shortBreakDuration}
        longBreakDuration={longBreakDuration}
      />
      <div
        onClick={() => setShowModal(true)}
        className="flex justiy-center items-center cursor-pointer"
      >
        <FaGear className="text-[#78909F] text-4xl mx-auto my-4" />
      </div>
      {showModal && (
        <Settings
          workDuration={workDuration}
          setWorkDuration={setWorkDuration}
          shortBreakDuration={shortBreakDuration}
          setShortBreakDuration={setShortBreakDuration}
          longBreakDuration={longBreakDuration}
          setLongBreakDuration={setLongBreakDuration}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
// pomodoroDuration={pomodoroDuration}
// setPomodoroChange={setPomodoroDuration}
// shortBreakDuration={shortBreakDuration}
// setShortBreakChange={setShortBreakDuration}
// longBreakDuration={longBreakDuration}
// setLongBreakChange={setLongBreakDuration} From line 47

{
  /* <BrowserRouter>
    <TimerProvider
      value={{
        remainingTime: durations.pomodoroDuration * 60,
        isPaused: true,
        setRemainingTime: (time) => setTime(time),
        setIsPaused: (isPaused) => setIsPaused(isPaused),
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              durations={durations}
              onDurationsChange={(type, value) => {
                setDurations({ ...durations, [type]: value });
              }}
            />
          }
        >
          <Route
            index
            element={<Hero timer={durations.pomodoroDuration} />}
          />
          <Route
            path="/Longbreak"
            element={<Longbreak timer={durations.longBreakDuration} />}
          />
          <Route
            path="/Shortbreak"
            element={<Shortbreak timer={durations.shortBreakDuration} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </TimerProvider>
  </BrowserRouter> */
}
//   const [durations, setDurations] = useState({
//     pomodoroDuration: 25,
//     shortBreakDuration: 5,
//     longBreakDuration: 15,
//   });
// import { TimerSettingsProvider } from "./components/Context/TimerSettingsProvider";

// const TimerContext = createContext({
//   remainingTime: 0,
//   isPaused: true,
//   setRemainingTime: () => {},
//   setIsPaused: () => {},
// });
