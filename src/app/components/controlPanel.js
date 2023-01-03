import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setTime, setTimerEnds } from "../controlPanelSlice";
import './controlPanel.css';
import audio from '../../audio/race-start-beeps-125125.mp3';



export const ControlPanel = () => {

  const dispatch = useDispatch();

  const [intervallStatus, setIntervallStatus] = useState(false);
  const [intervallId, setId] = useState('');

  const sessionTime = useSelector(state => state.sessionTime.value);
  const breakTime = useSelector(state => state.breakTime.value);

  const inputSessionTimeInSec = useRef('');
  const inputBreakTimeInSec = useRef('');
  const timerStatus = useRef('session');

  const audioRef = useRef();

  useEffect(() => {
    dispatch(setTime(
      sessionTime < 10
        ? `0${sessionTime}:00`
        : `${sessionTime}:00`
    ))
  }, [sessionTime])




  const timerFunction = (inputSessionTime, inputBreakTime) => {
    console.log(timerStatus);

    if (inputSessionTimeInSec.current === '' && inputBreakTimeInSec.current === '') {
      console.log('Set initial input');
      inputSessionTimeInSec.current = inputSessionTime * 60 - 1;
      inputBreakTimeInSec.current = inputBreakTime * 60;
    }
    if (timerStatus.current === 'session') {
      let minutes = Math.floor(inputSessionTimeInSec.current / 60);
      let seconds = inputSessionTimeInSec.current % 60;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      dispatch(setTime(`${minutes}:${seconds}`));

      inputSessionTimeInSec.current--;

      if (inputSessionTimeInSec.current < 0) {
        timerStatus.current = 'break';
        setTimeout(() => dispatch(setStatus('Break')), 1000);
        inputSessionTimeInSec.current = sessionTime * 60;
      } else if (inputSessionTimeInSec.current < 3) {
        audioRef.current.play();
      }
      else if (inputSessionTimeInSec.current < 60) {
        dispatch(setTimerEnds(true));
      } else {
        dispatch(setTimerEnds(false));
      }

    } else if (timerStatus.current === 'break') {
      let minutes = Math.floor(inputBreakTimeInSec.current / 60);
      let seconds = inputBreakTimeInSec.current % 60;

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      dispatch(setTime(`${minutes}:${seconds}`));

      inputBreakTimeInSec.current--;

      if (inputBreakTimeInSec.current < 0) {
        timerStatus.current = 'session';

        setTimeout(() => dispatch(setStatus('Session')), 1000);
        inputBreakTimeInSec.current = breakTime * 60;
      } else if (inputBreakTimeInSec.current < 3) {
        audioRef.current.play();
      }
      else if (inputBreakTimeInSec.current < 60) {
        dispatch(setTimerEnds(true));
      } else {
        dispatch(setTimerEnds(false));
      }
    }
  }


  useEffect(() => {

    if (intervallStatus) {
      setId(setInterval(() => timerFunction(sessionTime, breakTime), 1000));
    } else {
      clearInterval(intervallId);
    }

  }, [intervallStatus])


  const handleClick = () => {

    if (intervallStatus) {
      setIntervallStatus(false);
    } else {
      setIntervallStatus(true);
    }
  }


  const handleReset = () => {
    clearInterval(intervallId);
    inputSessionInSeconds = sessionTime * 60 - 1;
    inputBreakInSeconds = breakTime * 60;
    timerIntervallStatus = 'off';
    timerStatus = 'Session';
    audio.pause();
    audio.currentTime = 0;
    timerStatusElement.innerText = timerStatus;
    timerDisplayElement.style.color = 'black';
    timerDisplayElement.innerText = sessionTime < 10 ? `0${sessionTime}:00` : `${sessionTime}:00`;

  }

  return (
    <div id="controlPanel">

      <div onClick={handleClick} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div id="reset">
        <FaSyncAlt />
      </div>
      <audio ref={audioRef} src={audio} type="audio/mp3"></audio>
    </div>
  );
};

