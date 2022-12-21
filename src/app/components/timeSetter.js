import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import './timeSetter.css'


export const TimeSetter = ({ idUp, idDown, idTime, Time, increment, decrement }) => {

  const dispatch = useDispatch();

  return (
    <div id="timeSetter">
      <FaArrowUp
        className="arrow"
        id={idUp}
        onClick={() => dispatch(increment())} />

      <p id={idTime}>{Time}</p>

      <FaArrowDown
        className="arrow"
        id={idDown}
        onClick={() => dispatch(decrement())} />
    </div>
  );
}