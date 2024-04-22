import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

function Hero({
  longBreakDuration,
  workDuration,
  shortBreakDuration,
  active,
  setActive,
  activeColor,
}) {
  const timerId = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  function ringEnd() {
    const end = new Audio("/audio/End.mp3");
    end.play();
  }

  function ringBegin() {
    const begin = new Audio("/audio/BreakBell.mp3");
    begin.play();
  }

  const [remainingTime, setRemainingTime] = useState(null);
  useEffect(() => {
    switch (active) {
      case "work":
        setRemainingTime(workDuration * 60);
        break;
      case "short":
        setRemainingTime(shortBreakDuration * 60);
        break;
      case "long":
        setRemainingTime(longBreakDuration * 60);
        break;
      default:
        console.log("There is something  wrong with the active state");
    }
  }, [active]);

  const [numberOfWork, setNumberOfWork] = useState(1);

  function addRound() {
    ringBegin();
    setNumberOfWork((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(numberOfWork);
  }, [numberOfWork]);

  useEffect(() => {
    if (!isPaused) {
      timerId.current = setInterval(() => {
        if (active === "work") {
          if (remainingTime > 0) {
            setRemainingTime((prev) => prev - 1);
          } else {
            addRound();
            if (numberOfWork % 4 === 0) {
              setActive("long");
            } else {
              setActive("short");
            }
          }
        } else if (active === "short" || active === "long") {
          if (remainingTime > 0) {
            setRemainingTime((prev) => prev - 1);
          } else {
            ringEnd();
            setActive("work");
          }
        }
      }, 1000);
    }
    return () => clearInterval(timerId.current);
  }, [isPaused, remainingTime]);

  function handlePause() {
    setIsPaused((prev) => !prev);
  }

  const handleReset = () => {
    clearInterval(timerId.current);
    setRemainingTime(workDuration * 60);
    setIsPaused(true);
    setActive("work");
  };

  let totalSec = 0;
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    if (active === "work") {
      totalSec = workDuration * 60;
    } else if (active === "short") {
      totalSec = shortBreakDuration * 60;
    } else {
      totalSec = longBreakDuration * 60;
    }
    let percentages = Math.round((remainingTime / totalSec) * 100);
    setPercentage(percentages);
  }, [remainingTime]);

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

  const green = "#4aec8c";

  return (
    <div>
      <div className="w-[300px] h-[300px] my-8 mx-auto flex justify-center items-center rounded-full cirlce">
        <div className="w-[260px] h-[260px] bg-[#141832] mx-auto flex justify-center items-center rounded-full shadow-xl shadow-[rgba(37,42,84,0.7)] shadow-offset-x-0  shadow-offset-y-0 shadow-blur-8">
          <div className="w-[240px] h-[240px] rounded-full gap-y-4 bg-[#] flex justify-center items-center flex-col">
            <div className="text-[#D7E0FF] text-7xl font-bold font-sarif">
              <CircularProgressbar
                value={percentage}
                text={`${formatTime(remainingTime)}`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: active === "work" ? color : green,
                  trailColor: "#141832",
                  textSize: "27px",
                })}
              />
            </div>
            <div className="text-[#D7E0FF] mt-16 absolute font-semibold cursor-pointer tracking-widest text-[20px] mx-auto text-center">
              <div className={`mt-10 `} onClick={handlePause}>
                {isPaused ? "S T A R T" : "P A U S E"}
              </div>
              {isPaused && (
                <div className="" onClick={handleReset}>
                  R E S E T
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
