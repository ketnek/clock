import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './timeSetter.css'


export const TimeSetter = ({ idUp, idDown, idTime }) => {
  return (
    <div id="timeSetter">
      <FaArrowUp className="arrow" id={idUp} />
      <p id={idTime}>25</p>
      <FaArrowDown className="arrow" id={idDown} />
    </div>
  );
}