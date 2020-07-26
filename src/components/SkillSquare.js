import React from "react";
import "../scss/SkillSquare.scss";

const SkillSquare = ({ skill }) => {
  return (
    <div className="square">
      <p>{skill}</p>
    </div>
  );
};

export default SkillSquare;
