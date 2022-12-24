import React from "react";
import './timerDisplay.css';


export const TimerDisplay = ({ displayTime }) => {



  return (
    <p id="time-left">{displayTime}</p>
  );
}