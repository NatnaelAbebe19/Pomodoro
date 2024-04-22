import React, { useState, useEffect } from "react";

function Navbar({ active, activeColor }) {
  let color = "#F97170";
  switch (activeColor) {
    case "blue":
      color = "#6FF2F9";
      break;
    case "pink":
      color = "#D980F8";
      break;
    case "green":
      color = "#f6831e";
      break;
    default:
      color = "#F97170";
      break;
  }

  return (
    <div className="">
      <h1 className="text-[#D6DCFA] text-3xl font-bold font-sans mb-6 p-8 w-full text-center">
        pomodoro
      </h1>
      <div className="flex justify-between w-[360px] mx-auto  rounded-full bg-[#141832] p-2 ">
        <div
          className={`text-[#646985] font-bold ${
            active === "work" ? `bg-[${color}] text-[#141832]` : ""
          }   p-3 rounded-full cursor-pointer transition duration-600 ease-in-out`}
        >
          pomodoro
        </div>

        <div
          className={`text-[#646985] ${
            active === "short" ? `bg-[${color}] text-[#141832]` : ""
          } font-bold p-3 rounded-full cursor-pointer transition duration-600 ease-in-out`}
        >
          short break
        </div>
        <div
          className={`text-[#646985] ${
            active === "long" ? `bg-[${color}] text-[#141832]` : ""
          } font-bold p-3 rounded-full  cursor-pointer  transition duration-600 ease-in-out`}
        >
          long break
        </div>
      </div>
    </div>
  );
}

export default Navbar;
