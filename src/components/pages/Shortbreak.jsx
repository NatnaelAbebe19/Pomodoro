import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import { useTimerSettings } from "../Context/TimerSettingsProvider";

function Shortbreak({ timer }) {
  return (
    <div>
      <Hero timer={timer} />
    </div>
  );
}

export default Shortbreak;
