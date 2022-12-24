import React from "react";
import './timerLabel.css';


export const TimerLabel = ({ sessionStatus, breakStatus }) => {
  return (
    <p id="timer-label">{sessionStatus}</p>
  );
}