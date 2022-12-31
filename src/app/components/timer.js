import React from "react";
import { TimerLabel } from "./timerLabel";
import { TimerDisplay } from "./timerDisplay";
import { useSelector } from "react-redux";
import './timer.css';


export const Timer = () => {

  const displayTime = useSelector(state => state.displayTime.value);

  const displayTimerStatus = useSelector(status => status.displayTime.status);

  const timerEnds = useSelector(state => state.displayTime.timerEnds);

  return (
    <div id="timer">
      <TimerLabel
        timerStatus={displayTimerStatus}
        timerEnds={timerEnds} />
      <TimerDisplay
        displayTime={displayTime}
        timerEnds={timerEnds} />
    </div>
  );
}