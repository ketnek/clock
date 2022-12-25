import React from "react";
import { TimerLabel } from "./timerLabel";
import { TimerDisplay } from "./timerDisplay";
import { useSelector } from "react-redux";
import './timer.css';


export const Timer = () => {

  const displayTime = useSelector(state => state.displayTime.value);

  const displayTimerStatus = useSelector(status => status.displayTime.status);

  return (
    <div id="timer">
      <TimerLabel
        timerStatus={displayTimerStatus} />
      <TimerDisplay
        displayTime={displayTime}
      />
    </div>
  );
}