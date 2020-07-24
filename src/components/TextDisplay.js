import React, { useRef, useState, useEffect } from "react";
import "../scss/TextDisplay.scss";

const TextDisplay = ({ innerText, toggleDisplay }) => {
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
      <div className="title">{innerText.title}</div>
      <div className="date">{innerText.date}</div>
      <div className="text">{innerText.text}</div>
      <button onClick={toggleDisplay} className="topLeftButton">
        LCick
      </button>
    </div>
  );
};

export default TextDisplay;
