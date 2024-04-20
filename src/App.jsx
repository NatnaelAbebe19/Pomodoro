import React, { useState } from "react";
import "./App.css";
import Hero from "./components/pages/Hero";
import { FaGear } from "react-icons/fa6";
import Settings from "./components/pages/Settings";
import Navbar from "./components/Navbar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [active, setActive] = useState("work");

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
