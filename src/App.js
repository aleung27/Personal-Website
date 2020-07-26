import React, { useState } from "react";
import WorkCircle from "./components/WorkCircle";
import EduTriangle from "./components/EduTriangle";
import SkillSquare from "./components/SkillSquare";
import "./App.scss";

function App() {
  const [dimmed, setDimmed] = useState(false);

  const changeDimmed = () => {
    setDimmed((dimmed) => !dimmed);
  };

  return (
    <div className={`App ${dimmed ? "dimmed" : ""}`}>
      <WorkCircle
        jobTitle="LORA"
        date="Feb 2019 - Dec 2020"
        dimFunction={changeDimmed}
        isDisabled={dimmed}
      />
      <EduTriangle uni="USYD" date="2019-2023"></EduTriangle>
      <SkillSquare skill="C++"></SkillSquare>
      <div style={{ height: "1000px" }} />
    </div>
  );
}

export default App;
