import React from "react";
import './timerLabel.css';


export const TimerLabel = ({ timerStatus, timerEnds }) => {
  return (
    <p className={timerEnds ? 'warning' : ''} id="timer-label">{timerStatus}</p>
  );
}