import React from "react";
import './universalLabel.css';


export const UniversalLabel = ({ id, headline }) => {

  return (
    <h2 className="noMargin" id={id}>{headline}</h2>
  );
} 