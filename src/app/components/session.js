import React from "react";
import { TimeSetter } from "./timeSetter";
import { UniversalLabel } from "./universalLabel";
import './session.css';


export const Session = () => {
  return (
    <div id="session">

      <UniversalLabel
        id='session-label'
        headline='Session Length' />

      <TimeSetter
        idUp='session-increment'
        idDown='session-decrement'
        idTime='session-length' />

    </div>
  );
}