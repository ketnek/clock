import React from "react";
import { TimeSetter } from "./timeSetter";
import { UniversalLabel } from "./universalLabel";
import './session.css';
import { useSelector } from "react-redux";
import { increment, decrement } from '../sessionSlice';



export const Session = () => {

  const time = useSelector((state) => state.sessionTime.value);

  return (
    <div id="session">

      <UniversalLabel
        id='session-label'
        headline='Session Length' />

      <TimeSetter
        idUp='session-increment'
        idDown='session-decrement'
        idTime='session-length'
        Time={time}
        increment={increment}
        decrement={decrement} />

    </div>
  );
}