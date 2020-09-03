import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import "../scss/WorkCircle.scss";

const WorkCircle = ({ data, pos, isDisabled, toggleDisplay }) => {
  return (
    <div>
      <button
        className={"WorkCircle " + pos}
        onClick={() => toggleDisplay(data)}
        disabled={isDisabled}
      >
        <div className="job">{data.job}</div>
        <div className="date">{data.date}</div>
      </button>
    </div>
  );
};

export default WorkCircle;
