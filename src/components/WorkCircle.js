import React, { useState, useEffect } from "react";
import TextDisplay from "./TextDisplay";
import "../scss/WorkCircle.scss";

const WorkCircle = ({ jobTitle, date, dimFunction, isDisabled }) => {
  const [displayInner, setDisplayInner] = useState(false);

  const toggleDisplay = () => {
    dimFunction();
    setDisplayInner((displayInner) => !displayInner);
  };

  return (
    <div>
      <button
        className="WorkCircle"
        onClick={() => toggleDisplay()}
        disabled={isDisabled}
      >
        <div className="jobTitle">{jobTitle}</div>
        <div className="dates">{date}</div>
      </button>
      {displayInner ? (
        <TextDisplay
          className="display"
          innerText={{
            title: jobTitle,
            date: date,
            text: "hello",
          }}
          toggleDisplay={toggleDisplay}
        />
      ) : null}
    </div>
  );
};

export default WorkCircle;
