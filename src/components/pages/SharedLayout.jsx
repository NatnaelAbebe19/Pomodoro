import React from "react";
import Navbar from "../Navbar";
import { Outlet, NavLink } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

function SharedLayout() {
  return (
    <div className="bg-[#1F2141] h-dvh ">
      <h1 className>Pomodoro</h1>
      <Navbar />
      <Outlet />
      <FaGear className="text-[#78909F]" />
    </div>
  );
}

export default SharedLayout;

// #D6DCFA Big Pomodoro  color
// #646985 nav color
// #F97170 the orange
// #D7E0FF the number
