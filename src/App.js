import React, { useState } from "react";
import WorkCircle from "./components/WorkCircle";
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
      <div style={{ height: "1000px" }} />
    </div>
  );
}

export default App;
