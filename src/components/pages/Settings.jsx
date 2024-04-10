import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

function Settings() {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-opacity-30 backdrop-blur-sm">
      <div className=" bg-white w-[90%] p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">Settings</div>
          <div className="">
            <IoCloseSharp />
          </div>
        </div>
        <hr className="my-4" />
        <h1 className="my-4 font-semibold text-md tracking-widest">
          TIME (MINUTES)
        </h1>

        <div className="flex gap-x-2">
          <div className="flex flex-col ">
            <label htmlFor="pomodoro" className="text-sm">
              pomodoro
            </label>
            <input
              type="number"
              id="pomodoro"
              className="bg-[#EEF0FB] outline-none w-[6rem] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="shortBreak" className="text-sm">
              short break
            </label>
            <input
              type="number"
              id="shortBreak"
              className="bg-[#EEF0FB] outline-none w-[6rem] p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="longBreak" className="text-sm">
              long break
            </label>
            <input
              type="number"
              id="longBreak"
              className="bg-[#EEF0FB] outline-none w-[6rem] p-2 rounded-md"
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between ">
          <div className="uppercase font-bold text-sm">Font</div>
          <div className="flex gap-x-4">
            <div className="w-8 h-8 rounded-full bg-black text-white text-center">
              Aa
            </div>
            <div className="w-8 h-8 rounded-full bg-[#EEF0FB] text-center">
              Aa
            </div>
            <div className="w-8 h-8 rounded-full bg-[#EEF0FB] text-center">
              Aa
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between mb-2">
          <div className="font-semibold text-sm">COLOR</div>
          <div className="flex gap-x-4">
            <div className="w-8 h-8 flex justify-center items-center vercel bg-[#F86F6D] rounded-full">
              {<TiTick className="text-xl" />}
            </div>
            <div className="w-8 h-8 bg-[#6FF2F9] rounded-full"></div>
            <div className="w-8 h-8 bg-[#D980F8] rounded-full"></div>
          </div>
        </div>
        <button className="relative top-[2.3rem] left-24 bg-[#F97170] p-2 px-4 text-white font-semibold rounded-full ">
          Apply
        </button>
      </div>
    </div>
  );
}

export default Settings;