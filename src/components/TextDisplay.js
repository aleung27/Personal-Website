import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import "../scss/TextDisplay.scss";

const TextDisplay = ({ data, toggleDisplay }) => {
  // reference is a reference to the TextDisplay component
  const reference = useRef();

  const outsideClick = (e) => {
    // When we click outside of the TextDisplay, we close it
    if (reference.current && !reference.current.contains(e.target)) {
      toggleDisplay();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClick);

    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  });

  return (
    <div className="container" ref={reference}>
      <h1>{data.job}</h1>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <div className="text">{data.description}</div>
      <FontAwesomeIcon
        className="topLeftButton"
        icon={faTimesCircle}
        onClick={toggleDisplay}
        size="2x"
      />
    </div>
  );
};

export default TextDisplay;
