import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { setIntervalRuns, setStatus, setTime, setTimerEnds } from "../controlPanelSlice";
import './controlPanel.css';
import audio from '../../audio/race-start-beeps-125125.mp3';
import { resetSession } from "../sessionSlice";
import { resetBreak } from "../breakSlice";


export const ControlPanel = () => {

  const dispatch = useDispatch();

  const [intervalId, setId] = useState('');
  const intervalStatus = useSelector(state => state.timer.intervalRuns);

  const sessionTime = useSelector(state => state.sessionTime.value);
  const breakTime = useSelector(state => state.breakTime.value);

  const inputSessionTimeInSec = useRef('');
  const inputBreakTimeInSec = useRef('');
  const timerStatus = useRef('session');

  const audioRef = useRef();

  // Sets the initial displayed time und reset the running timer interval

  useEffect(() => {

    dispatch(setTime(
      sessionTime < 10
        ? `0${sessionTime}:00`
        : `${sessionTime}:00`
    ))
    inputSessionTimeInSec.current = '';
    inputBreakTimeInSec.current = '';
    timerStatus.current = 'session';
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(setTimerEnds(false));
    dispatch(setStatus('Session'));

    //eslint-disable-next-line
  }, [sessionTime])


  // Logic for the timer

  const timerFunction = (inputSessionTime, inputBreakTime) => {

    if (inputSessionTimeInSec.current === '' && inputBreakTimeInSec.current === '') {

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
        dispatch(setStatus('Break'));
        inputSessionTimeInSec.current = sessionTime * 60;

      } else if (inputSessionTimeInSec.current < 3) {
        audioRef.current.play();

      } else if (inputSessionTimeInSec.current < 60) {
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
        dispatch(setStatus('Session'));
        inputBreakTimeInSec.current = breakTime * 60;

      } else if (inputBreakTimeInSec.current < 3) {
        audioRef.current.play();

      } else if (inputBreakTimeInSec.current < 60) {
        dispatch(setTimerEnds(true));

      } else {
        dispatch(setTimerEnds(false));
      }
    }
  }

  // Handles the start and stop for the timer interval and gets the interval status from the handleClick below

  useEffect(() => {

    if (intervalStatus) {
      setId(setInterval(() => timerFunction(sessionTime, breakTime), 1000));
    } else {
      clearInterval(intervalId);
    }
    //eslint-disable-next-line
  }, [intervalStatus])

  // Sets the interval status for the useEffect above

  const handleClick = () => {

    if (intervalStatus) {

      dispatch(setIntervalRuns(false));
      audioRef.current.pause();

    } else {
      dispatch(setIntervalRuns(true));
    }
  }

  // Handles the reset for the timer

  const handleReset = () => {

    dispatch(setIntervalRuns(false));
    inputSessionTimeInSec.current = '';
    inputBreakTimeInSec.current = '';
    timerStatus.current = 'session';
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(setTimerEnds(false));
    dispatch(setStatus('Session'));
    dispatch(resetSession());
    dispatch(resetBreak());
    dispatch(setTime(
      sessionTime < 10
        ? `0${sessionTime}:00`
        : `${sessionTime}:00`
    ));
  }

  return (
    <div id="controlPanel">

      <div onClick={handleClick} id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div onClick={handleReset} id="reset">
        <FaSyncAlt />
      </div>

      <audio id="beep" ref={audioRef} src={audio} type="audio/mp3"></audio>

    </div>
  );
};

