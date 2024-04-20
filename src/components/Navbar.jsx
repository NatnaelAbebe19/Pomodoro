import React from "react";

function Navbar({ active, activeColor }) {

  let orange = "#F97170";
  // useEffect(() => {
  switch (activeColor) {
    case "orange":
      orange = "#F97170";
      break;
    case "blue":
      orange = "#6FF2F9";
      break;
    case "pink":
      orange = "#D980F8";
      break;
    default:
      orange = "#F97170";
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
            active === "work" ? `bg-[${orange}] text-[#141832]` : ""
          }   p-3 rounded-full cursor-pointer transition duration-600 ease-in-out`}
        >
          pomodoro
        </div>

        <div
          className={`text-[#646985] ${
            active === "short" ? `bg-[${orange}] text-[#141832]` : ""
          } font-bold p-3 rounded-full cursor-pointer transition duration-600 ease-in-out`}
        >
          short break
        </div>
        <div
          className={`text-[#646985] ${
            active === "long" ? `bg-[${orange}] text-[#141832]` : ""
          } font-bold p-3 rounded-full  cursor-pointer  transition duration-600 ease-in-out`}
        >
          long break
        </div>
      </div>
    </div>
  );
}

export default Navbar;
