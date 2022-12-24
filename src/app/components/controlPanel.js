import React from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setDisplayValue } from "../timerDisplaySlice";
import './controlPanel.css';


export const ControlPanel = () => {
  const dispatch = useDispatch();

  let test = useSelector((state) => state.sessionTime.value) * 60 - 1;

  const handleClick = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    dispatch(setDisplayValue(`${minutes}:${seconds}`));

    test--;
  };



  return (
    <div id="controlPanel">

      <div onClick={() => handleClick(test)} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div id="reset">
        <FaSyncAlt />
      </div>

    </div>
  );
}
