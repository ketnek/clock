import React from "react";
import './timerDisplay.css';


export const TimerDisplay = ({ displayTime, timerEnds }) => {

  return (
    <p className={timerEnds ? 'warning' : ''}
      id="time-left">{displayTime}</p>
  );
}