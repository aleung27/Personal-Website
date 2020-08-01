import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import "../scss/WorkCircle.scss";

const WorkCircle = ({ data, pos, dimFunction, isDisabled }) => {
  const [displayInner, setDisplayInner] = useState(false);

  const toggleDisplay = () => {
    dimFunction();
    setDisplayInner((displayInner) => !displayInner);
  };

  return (
    <div>
      <button
        className={"WorkCircle " + pos}
        onClick={() => toggleDisplay()}
        disabled={isDisabled}
      >
        <div className="job">{data.job}</div>
        <div className="date">{data.date}</div>
      </button>
      {displayInner ? (
        <TextDisplay
          className="display"
          innerText={{
            title: data.job,
            date: data.date,
            text: data.description,
          }}
          toggleDisplay={toggleDisplay}
        />
      ) : null}
    </div>
  );
};

export default WorkCircle;
