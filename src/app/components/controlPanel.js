import React, { useEffect } from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import './controlPanel.css';


export const ControlPanel = () => {
  // const dispatch = useDispatch();
  let sessionValue = useSelector((state) => state.sessionTime.value) * 60;

  let breakValue = useSelector((state) => state.breakTime.value);



  const handleClick = (sessionLength, breakLength) => {

    let minutes = Math.floor(sessionLength / 60);
    let seconds = sessionLength % 60;

    seconds < 10 ? seconds = `0${seconds}` : seconds = seconds;

    sessionValue--;

    // dispatch(setTime(`${minutes}:${seconds}`));
  }

  return (
    <div id="controlPanel">

      <div onClick={() => handleClick(sessionValue)} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div id="reset">
        <FaSyncAlt />
      </div>

    </div>
  );
}
