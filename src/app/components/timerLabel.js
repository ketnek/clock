import React from "react";
import './timerLabel.css';


export const TimerLabel = ({ timerStatus }) => {
  return (
    <p id="timer-label">{timerStatus}</p>
  );
}