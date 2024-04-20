import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

function Settings({
  workDuration,
  setWorkDuration,
  shortBreakDuration,
  setShortBreakDuration,
  longBreakDuration,
  setLongBreakDuration,
  onClose,
  onApply,
}) {
  const modalRef = useRef();

  const modalClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  function handleWorkChange(e) {
    setWorkDuration(e.target.value);
  }

  function handleShortChange(e) {
    setShortBreakDuration(e.target.value);
  }

  function handleLongChange(e) {
    setLongBreakDuration(e.target.value);
  }

  function onApply() {
    onClose();
  }

  return (
    <div className="w-[100dvw]">
      <form
        // onSubmit={handleSubmit}
        ref={modalRef}
        onClick={modalClose}
        className="fixed flex justify-center items-center w-[365px] md:w-[500px] mx-auto inset-0 bg-opacity-30 backdrop-blur-sm"
      >
        <div className=" bg-white w-[90%] p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Settings</div>
            <div
              className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
              onClick={onClose}
            >
              <IoCloseSharp size={15} />
            </div>
          </div>
          <hr className="my-4" />
          <h1 className="my-4 font-semibold text-md tracking-widest">
            TIME (MINUTES)
          </h1>
          <div className="flex gap-x-2 justify-center md:justify-around">
            <div className="flex flex-col ">
              <label htmlFor="pomodoro" className="text-sm">
                pomodoro
              </label>
              <input
                type="number"
                id="pomodoro"
                value={workDuration}
                onChange={handleWorkChange}
                className="bg-[#EEF0FB] outline-none w-[6rem] md:w-[7rem] p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="shortBreak" className="text-sm">
                short break
              </label>
              <input
                type="number"
                id="shortBreak"
                value={shortBreakDuration}
                onChange={handleShortChange}
                className="bg-[#EEF0FB] outline-none w-[6rem] p-2 rounded-md md:w-[7rem]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="longBreak" className="text-sm">
                long break
              </label>
              <input
                type="number"
                id="longBreak"
                value={longBreakDuration}
                onChange={handleLongChange}
                className="md:w-[7rem] bg-[#EEF0FB] outline-none w-[6rem] p-2 rounded-md"
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between ">
            <div className="uppercase font-semibold text-sm">Font</div>
            <div className="flex gap-x-4">
              <div className="w-8 h-8 rounded-full bg-black text-white text-center cursor-pointer font-sans">
                Aa
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EEF0FB] text-center cursor-pointer font-serif">
                Aa
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EEF0FB] text-center cursor-pointer font-mono">
                Aa
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-sm">COLOR</div>
            <div className="flex gap-x-4 cursor-pointer">
              <div className="w-8 h-8 flex justify-center items-center vercel bg-[#F86F6D] rounded-full">
                {<TiTick className="text-xl" />}
              </div>
              <div className="w-8 h-8 bg-[#6FF2F9] rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-[#D980F8] rounded-full cursor-pointer"></div>
            </div>
          </div>
          <button
            type="button"
            onClick={onApply}
            className="relative top-[2.3rem] left-28 bg-[#F97170] p-2 px-4 text-white font-semibold rounded-full md:left-[10rem]"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
