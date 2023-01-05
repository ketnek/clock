import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import './timeSetter.css'


export const TimeSetter = ({ idUp, idDown, idTime, Time, increment, decrement }) => {

  const dispatch = useDispatch();

  const intervalStatus = useSelector(state => state.timer.intervalRuns);
  const sessionTime = useSelector(state => state.sessionTime.value);
  const breakTime = useSelector(state => state.breakTime.value);

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());


  return (
    <div id="timeSetter">
      <FaArrowUp
        className={`arrow ${intervalStatus && 'preventOnClick'}`}
        id={idUp}
        onClick={handleIncrement} />

      <p id={idTime}>{Time}</p>

      <FaArrowDown
        className={`arrow ${intervalStatus && 'preventOnClick'}`}
        id={idDown}
        onClick={handleDecrement} />
    </div>
  );
}