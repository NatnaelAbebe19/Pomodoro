import React from "react";

function Navbar() {
  return (
    <div className="">
      <h1 className="text-[#D6DCFA] text-3xl font-bold font-sans mb-6 p-8 w-full text-center">
        pomodoro
      </h1>
      <div className="flex gap-x-4 justify-between w-[100%] mx-auto  rounded-full bg-[#141832] p-2 ">
        <div className="text-[#646985] font-bold bg-[#F97170] p-3 rounded-full">
          Pomodoro
        </div>
        <div className="text-[#646985] font-bold p-3 rounded-full">
          short break
        </div>
        <div className="text-[#646985] font-bold p-3 rounded-full">
          long break
        </div>
      </div>
    </div>
  );
}

export default Navbar;
