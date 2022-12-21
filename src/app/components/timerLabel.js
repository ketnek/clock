import React from "react";
import './timerLabel.css';


export const TimerLabel = ({ status }) => {
  return (
    <p id="timer-label">{status}</p>
  );
}