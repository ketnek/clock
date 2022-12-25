import React, { useEffect } from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { decrementInputTime, setInputTime } from "../controlSlice";
import { setDisplayValue, setTimerStatus } from "../timerDisplaySlice";
import './controlPanel.css';


export const ControlPanel = () => {
  const dispatch = useDispatch();

  let displayTime = useSelector(state => state.displayTime.value);

  let sessionTime = useSelector(state => state.sessionTime.value) * 60;

  let breakTime = useSelector(state =>
    state.breakTime.value) * 60;

  let timerStatus = useSelector(state => state.displayTime.status);


  useEffect(() => {
    dispatch(setDisplayValue(`${sessionTime / 60}:00`));
    dispatch(setInputTime(sessionTime));
  }, [sessionTime, dispatch]);

  let inputTime = useSelector(state => state.inputTime.value);



  const handleClick = (time) => {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    dispatch(setDisplayValue(`${minutes}:${seconds}`));

    dispatch(decrementInputTime());


    if (inputTime < 0 && timerStatus === 'Session') {
      inputTime = dispatch(setInputTime(breakTime - 1));
      dispatch(setTimerStatus('Break'));
      dispatch(setDisplayValue(`${breakTime / 60}:00`));



    } else if (inputTime < 0 && timerStatus === 'Break') {
      inputTime = dispatch(setInputTime(sessionTime - 1));
      dispatch(setTimerStatus('Session'));
      dispatch(setDisplayValue(`${sessionTime / 60}:00`));


    }

  };



  return (
    <div id="controlPanel">

      <div onClick={() => handleClick(inputTime)} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div id="reset">
        <FaSyncAlt />
      </div>

    </div>
  );
}
