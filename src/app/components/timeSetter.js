import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import './timeSetter.css'


export const TimeSetter = ({
  idUp,
  idDown,
  idTime,
  Time,
  increment,
  decrement
}) => {

  const intervalStatus = useSelector(state => state.timer.intervalRuns);

  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className="timeSetter">

      <div className={`arrow ${intervalStatus && 'preventOnClick'}`}
        id={idUp}
        onClick={handleIncrement}>
        <FaArrowUp />
      </div>

      <p id={idTime}>{Time}</p>

      <div className={`arrow ${intervalStatus && 'preventOnClick'}`}
        id={idDown}
        onClick={handleDecrement}>
        <FaArrowDown />
      </div>

    </div>
  );
}