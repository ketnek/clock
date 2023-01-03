import React from "react";
import { TimerLabel } from "./timerLabel";
import { TimerDisplay } from "./timerDisplay";
import { useSelector } from "react-redux";
import './timer.css';


export const Timer = () => {

  const displayTime = useSelector(state => state.timer.value);
  const displayTimerStatus = useSelector(state => state.timer.status);
  const timerEnds = useSelector(state => state.timer.timerEnds);

  return (
    <div id="timer">
      <TimerLabel
        timerEnds={timerEnds}
        displayTimerStatus={displayTimerStatus} />
      <TimerDisplay
        timerEnds={timerEnds}
        displayTime={displayTime} />
    </div>
  );
}