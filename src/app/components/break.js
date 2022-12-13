import React from "react";
import { TimeSetter } from "./timeSetter";
import { UniversalLabel } from "./universalLabel";
import './break.css';


export const Break = () => {
  return (
    <div id="break">

      <UniversalLabel
        id='break-label'
        headline='Break Length' />

      <TimeSetter
        idUp='break-increment'
        idDown='break-decrement'
        idTime='break-length' />

    </div>
  );
}