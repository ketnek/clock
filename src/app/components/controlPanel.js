import React, { useEffect, useRef } from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setDisplayValue, setTimerEnds, setTimerStatus } from "../timerDisplaySlice";
import './controlPanel.css';
import Sound from '../../audio/race-start-beeps-125125.mp3';


export const ControlPanel = () => {

  const sessionTime = useSelector(state => state.sessionTime.value);
  const inputSessionInSeconds = useRef(sessionTime * 60 - 1);
  const breakTime = useSelector(state => state.breakTime.value);
  const inputBreakInSeconds = useRef(breakTime * 60 - 1);
  const timerStatus = useSelector(state => state.displayTime.status);


  const dispatch = useDispatch();
  const audioRef = useRef();
  const timerIntervallStatus = useRef('off');
  const timerIntervallId = useRef();



  useEffect(() => {
    dispatch(setTimerStatus(timerStatus));
    dispatch(setDisplayValue(sessionTime < 10 ? `0${sessionTime}:00` : `${sessionTime}:00`));
  })





  const timerFunction = (inputSessionTime, inputBreakTime) => {

    console.log(`session:${inputSessionInSeconds.current}`);
    console.log(`break:${inputBreakInSeconds.current}`);
    if (timerStatus === 'Session') {

      let minutes = Math.floor(inputSessionTime / 60);
      let seconds = inputSessionTime % 60;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      dispatch(setDisplayValue(`${minutes}:${seconds}`));

      inputSessionInSeconds.current--;

      if (inputSessionInSeconds.current < 0) {

        setTimeout(() => dispatch(setTimerStatus('Break')), 1000);
        inputSessionInSeconds.current = sessionTime * 60;
      } else if (inputSessionInSeconds.current < 3) {
        audioRef.current.play();

      }
      if (inputSessionInSeconds.current < 59) {
        dispatch(setTimerEnds(true));
      } else {
        dispatch(setTimerEnds(false));
      }

    } else if (timerStatus === 'Break') {

      let minutes = Math.floor(inputBreakTime / 60);
      let seconds = inputBreakTime % 60;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      dispatch(setDisplayValue(`${minutes}:${seconds}`));

      inputBreakInSeconds.current--;

      if (inputBreakInSeconds.current < 0) {

        setTimeout(() => dispatch(setTimerStatus('Session')), 1000);
        inputBreakInSeconds.current = breakTime * 60;
      } else if (inputBreakInSeconds.current < 3) {
        audioRef.current.play();
      }

      if (inputBreakInSeconds.current < 59) {
        dispatch(setTimerEnds(true));
      } else {
        dispatch(setTimerEnds(false));
      }
    };
  }


  const timerFunctionIntervall = () => {
    timerIntervallId.current = setInterval(() => timerFunction(inputSessionInSeconds.current, inputBreakInSeconds.current), 1000);
  }


  const handleStartStop = () => {

    if (timerIntervallStatus.current === 'off') {
      timerFunctionIntervall();
      timerIntervallStatus.current = 'on';

    } else if (timerIntervallStatus.current === 'on') {
      clearInterval(timerIntervallId.current);
      timerIntervallStatus.current = 'off';
    }
  };

  const handleReset = () => {
    console.log('Hallo');
    console.log(timerIntervallStatus);
    console.log(timerIntervallId);

    clearInterval(timerIntervallId.current);
    inputSessionInSeconds.current = sessionTime * 60 - 1;
    inputBreakInSeconds.current = breakTime * 60;
    timerIntervallStatus.current = 'off';
    timerStatus = 'Session';
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(setTimerStatus(timerStatus));
    dispatch(setTimerEnds(false));
    dispatch(setDisplayValue(sessionTime < 10 ? `0${sessionTime}:00` : `${sessionTime}:00`));

  };

  return (
    <div id="controlPanel">

      <div onClick={handleStartStop} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div onClick={handleReset} id="reset">
        <FaSyncAlt />
      </div>
      <audio ref={audioRef} src={Sound}></audio>
    </div>
  );
};

