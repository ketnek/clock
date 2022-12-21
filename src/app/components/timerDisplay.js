import React from "react";
import './timerDisplay.css';


export const TimerDisplay = ({ time }) => {

  return (
    <p id="time-left">{time}</p>
  );
}