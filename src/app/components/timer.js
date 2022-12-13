import React from "react";
import { TimerLabel } from "./timerLabel";
import { TimerDisplay } from "./timerDisplay";
import './timer.css';


export const Timer = () => {
  return (
    <div id="timer">
      <TimerLabel />
      <TimerDisplay />
    </div>
  );
}