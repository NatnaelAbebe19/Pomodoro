import React, { useState } from "react";
import Navbar from "../Navbar";
import { Outlet, NavLink } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import Settings from "./Settings";

function SharedLayout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#1F2141] h-dvh ">
      <Navbar />
      <Outlet />
      <NavLink
        onClick={() => setShowModal(true)}
        className="flex justiy-center items-center"
      >
        <FaGear className="text-[#78909F] text-4xl mx-auto my-8" />
      </NavLink>
      {showModal && <Settings onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default SharedLayout;

// #D6DCFA Big Pomodoro  color
// #646985 nav color
// #F97170 the orange
// #D7E0FF the number
