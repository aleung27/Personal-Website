import React, { useState } from "react";
import WorkCircle from "../components/WorkCircle";
import EduTriangle from "../components/EduTriangle";
import SkillSquare from "../components/SkillSquare";
import FadeSection from "../components/FadeSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import * as vars from "../vars";
import "../scss/Home.scss";

const Home = () => {
  const [dimmed, setDimmed] = useState(false);

  const changeDimmed = () => {
    setDimmed((dimmed) => !dimmed);
  };

  const scrollUp = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`Home${dimmed ? " dimmed" : ""}`}>
      <div className="title-page">
        <h1>Adam Leung</h1>
        <h2>A Personal Website</h2>
        <div className="title-page-arrow">
          <p>Let's Go!</p>
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="down-arrow"
            size="3x"
          />
        </div>
      </div>
      <FadeSection visible={false} classes="fade-section-arrow">
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          size="3x"
          className="scroll-arrow"
          onClick={() => scrollUp()}
        />
      </FadeSection>
      <div className="work">
        <h1>Work Experience</h1>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.lora}
            pos="left"
            dimFunction={changeDimmed}
            isDisabled={dimmed}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.dux}
            pos="right"
            dimFunction={changeDimmed}
            isDisabled={dimmed}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.news}
            pos="left"
            dimFunction={changeDimmed}
            isDisabled={dimmed}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.reject}
            pos="right"
            dimFunction={changeDimmed}
            isDisabled={dimmed}
          />
        </FadeSection>
      </div>
      <div className="edu">
        <h1>Education</h1>
        <EduTriangle uni="University of Sydney" date="2019-2023"></EduTriangle>
        <EduTriangle uni="Penn State University" date="2020-2020"></EduTriangle>
        <EduTriangle
          uni="James Ruse Agricultural High School"
          date="2013-2018"
        ></EduTriangle>
      </div>
      <div className="lang">
        <h1>Languages/Frameworks</h1>
        <SkillSquare skill="C++"></SkillSquare>
        <SkillSquare skill="C"></SkillSquare>
        <SkillSquare skill="Python"></SkillSquare>
        <SkillSquare skill="HTML"></SkillSquare>
        <SkillSquare skill="CSS/SCSS"></SkillSquare>
        <SkillSquare skill="Javascript"></SkillSquare>
        <SkillSquare skill="ReactJS"></SkillSquare>
      </div>
    </div>
  );
};

export default Home;
