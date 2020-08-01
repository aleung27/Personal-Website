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
      <EduTriangle uni="USYD" date="2019-2023"></EduTriangle>
      <SkillSquare skill="C++"></SkillSquare>
      <div style={{ height: "1000px" }} />
    </div>
  );
}

export default App;
