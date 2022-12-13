import React from "react";
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import './controlPanel.css';


export const ControlPanel = () => {
  return (
    <div id="controlPanel">

      <div id="start_stop">
        <FaPlay />
        <FaPause />
      </div>

      <div id="reset">
        <FaSyncAlt />
      </div>

    </div>
  );
}