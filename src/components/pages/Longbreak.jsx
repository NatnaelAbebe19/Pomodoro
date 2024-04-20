import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
// import { useTimerSettings } from "../Context/TimerSettingsProvider";

function Longbreak({ timer }) {
  return (
    <div>
      <Hero timer={timer} />
    </div>
  );
}

export default Longbreak;

// const [countDown, setCountDown] = useState(timer * 60);
// const timerId = useRef();

// useEffect(() => {
//   timerId.current = setInterval(() => {
//     setCountDown((prev) => prev - 1);
//   }, 1000);

//   return () => clearInterval(timerId.current);
// }, []);

// useEffect(() => {
//   if (countDown <= 0) {
//     clearInterval(timerId.current);
//     alert("Can the short break begin!");
//   }
// }, [countDown]);

// const [longTime, setLongTime] = useState(15);

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     setLongTime((prevSeconds) => prevSeconds - 1);
//   }, 1000);

//   return () => {
//     clearInterval(intervalId);
//   };
// }, []);

// const { longBreakDuration } = useTimerSettings();

// const formatTime = (time) => {
//   const minutes = Math.floor(time / 3600);
// };

// useEffect(() => {
//   if (longTime === 0) {
//     clearInterval(intervalId);
//   }
// }, [longTime]);
