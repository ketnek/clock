import React from "react";
import { TimeSetter } from "./timeSetter";
import { UniversalLabel } from "./universalLabel";
import './break.css';
import { useSelector } from "react-redux";
import { increment, decrement } from '../breakSlice';


export const Break = () => {

  const time = useSelector((state) => state.breakTime.value);

  return (
    <div id="break">

      <UniversalLabel
        id='break-label'
        headline='Break Length' />

      <TimeSetter
        idUp='break-increment'
        idDown='break-decrement'
        idTime='break-length'
        Time={time}
        increment={increment}
        decrement={decrement} />

    </div>
  );
}