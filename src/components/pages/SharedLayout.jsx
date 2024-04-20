import React, { useState } from "react";
import Navbar from "../Navbar";
import { Outlet, NavLink } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import Settings from "./Settings";
import Hero from "./Hero";

function SharedLayout({ durations, onDurationsChange }) {
  const [showModal, setShowModal] = useState(false);

  const handleApplySettings = (newSettings) => {
    onDurationsChange("pomodoroDuration", newSettings.pomodoroDuration); // Update each duration
    onDurationsChange("shortBreakDuration", newSettings.shortBreakDuration);
    onDurationsChange("longBreakDuration", newSettings.longBreakDuration);
  };

  return (
    <div className="bg-[#1F2141] h-dvh ">
      <Navbar />
      <Outlet />
      <NavLink
        onClick={() => setShowModal(true)}
        className="flex justiy-center items-center"
      >
        <FaGear className="text-[#78909F] text-4xl mx-auto my-4" />
      </NavLink>

      
    </div>
  );
}

export default SharedLayout;

// #D6DCFA Big Pomodoro  color
// #646985 nav color
// #F97170 the orange
// #D7E0FF the number
// pomodoroDuration,
// onPomodoroChange,
// shortBreakDuration,
// onShortBreakChange,
// longBreakDuration,
// onLongBreakChange, from line number 10

// pomodoroDuration={pomodoroDuration}
// onPomodoroChange={onPomodoroChange}
// shortBreakDuration={shortBreakDuration}
// onShortBreakChange={onShortBreakChange}
// longBreakDuration={longBreakDuration}
// onLongBreakChange={onLongBreakChange}

// From line number 35
