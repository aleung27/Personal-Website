import React from "react";
import "../scss/EduTriangle.scss";

const EduTriangle = ({ uni, date }) => {
  return (
    <div className="triangle">
      <div className="left-triangle"></div>
      <div className="right-triangle"></div>
      <div className="uni">
        <p>{uni}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default EduTriangle;
