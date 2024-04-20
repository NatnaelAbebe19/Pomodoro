import React from "react";
// import { div } from "react-router-dom";

function Navbar({ active, setActive }) {
  function handleWork(e) {
    e.stopPropagation();
    setActive("work");
  }
  function handleLong(e) {
    e.stopPropagation();
    setActive("long");
  }
  function handleShort(e) {
    e.stopPropagation();
    setActive("short");
  }

  return (
    <div className="">
      <h1 className="text-[#D6DCFA] text-3xl font-bold font-sans mb-6 p-8 w-full text-center">
        pomodoro
      </h1>
      <div className="flex justify-between w-[360px] mx-auto  rounded-full bg-[#141832] p-2 ">
        <div
          // onClick={handleWork}
          className="text-[#646985] font-bold hover:bg-[#11142a]  active:bg-[#F97170] focus:bg-[#F97170] p-3 rounded-full cursor-pointer active:text-[#141832] focus:text-[#141832] transition duration-600 ease-in-out"
        >
          pomodoro
        </div>
        <div
          // onClick={handleLong}
          className="text-[#646985] font-bold p-3 rounded-full hover:bg-[#11142a]  active:bg-[#F97170] focus:bg-[#F97170] cursor-pointer active:text-[#141832] focus:text-[#141832] transition duration-600 ease-in-out"
        >
          long break
        </div>
        <div
          // onClick={handleShort}
          className={`text-[#646985] font-bold p-3 rounded-full hover:bg-[#11142a]  active:bg-[#F97170] focus:bg-[#F97170] cursor-pointer active:text-[#141832] focus:text-[#141832] transition duration-600 ease-in-out ${active}`}
        >
          short break
        </div>
      </div>
    </div>
  );
}

export default Navbar;
