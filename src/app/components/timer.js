import React from "react";
import { TimerLabel } from "./timerLabel";
import { TimerDisplay } from "./timerDisplay";
import { useSelector } from "react-redux";
import './timer.css';


export const Timer = () => {

  const status = useSelector((state) => state.sessionTime.status);
  const time = useSelector((state) => state.sessionTime.value);

  return (
    <div id="timer">
      <TimerLabel
        status={status} />
      <TimerDisplay
        time={time} />
    </div>
  );
}