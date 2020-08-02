import React, { useState } from "react";
import WorkCircle from "./components/WorkCircle";
import EduTriangle from "./components/EduTriangle";
import SkillSquare from "./components/SkillSquare";
import * as vars from "./vars";
import "./App.scss";

function App() {
  const [dimmed, setDimmed] = useState(false);

  const changeDimmed = () => {
    setDimmed((dimmed) => !dimmed);
  };

  return (
    <div className={`App${dimmed ? " dimmed" : ""}`}>
      <div className="work">
        <h1>Work Experience</h1>
        <WorkCircle
          data={vars.lora}
          pos="left"
          dimFunction={changeDimmed}
          isDisabled={dimmed}
        />
        <WorkCircle
          data={vars.dux}
          pos="right"
          dimFunction={changeDimmed}
          isDisabled={dimmed}
        />
        <WorkCircle
          data={vars.news}
          pos="left"
          dimFunction={changeDimmed}
          isDisabled={dimmed}
        />
        <WorkCircle
          data={vars.reject}
          pos="right"
          dimFunction={changeDimmed}
          isDisabled={dimmed}
        />
      </div>
      <div className="edu">
        <h2>Education</h2>
        <EduTriangle uni="University of Sydney" date="2019-2023"></EduTriangle>
        <EduTriangle uni="Penn State University" date="2020-2020"></EduTriangle>
        <EduTriangle
          uni="James Ruse Agricultural High School"
          date="2013-2018"
        ></EduTriangle>
      </div>
      <SkillSquare skill="C++"></SkillSquare>
      <div style={{ height: "1000px" }} />
    </div>
  );
}

export default App;
