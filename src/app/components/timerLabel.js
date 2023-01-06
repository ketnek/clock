import React from "react";
import './timerLabel.css';


export const TimerLabel = ({ displayTimerStatus, timerEnds }) => {

  return (
    <p className={timerEnds ? 'warning' : ''}
      id="timer-label">{displayTimerStatus}</p>
  );
}