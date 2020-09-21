import React, { useState } from "react";
import WorkCircle from "../components/WorkCircle";
import EduTriangle from "../components/EduTriangle";
import SkillSquare from "../components/SkillSquare";
import FadeSection from "../components/FadeSection";
import TextDisplay from "../components/TextDisplay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";

import * as vars from "../vars";
import "../scss/Home.scss";

const Home = () => {
  const [dimmed, setDimmed] = useState(false);
  const [modalData, setModalData] = useState(null);

  const scrollUp = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDisplay = (data) => {
    setDimmed((dimmed) => !dimmed);
    setModalData(data);
  };

  return (
    <div className={`Home${dimmed ? " dimmed" : ""}`}>
      <Particles
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
        params={{
          particles: {
            number: {
              value: 47,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000",
              },
            },
            opacity: {
              value: 0.1,
              random: false,
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 2,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "remove",
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 300,
                size: 12,
                duration: 2,
                opacity: 0.1,
                speed: 3,
              },
              repulse: {
                distance: 23.974491141425514,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
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

      {modalData ? (
        <TextDisplay data={modalData} toggleDisplay={toggleDisplay} />
      ) : null}

      <div className="work">
        <h1>Work Experience</h1>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.lora}
            pos="left"
            isDisabled={dimmed}
            toggleDisplay={toggleDisplay}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.dux}
            pos="right"
            isDisabled={dimmed}
            toggleDisplay={toggleDisplay}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.news}
            pos="left"
            isDisabled={dimmed}
            toggleDisplay={toggleDisplay}
          />
        </FadeSection>
        <FadeSection visible={false}>
          <WorkCircle
            data={vars.reject}
            pos="right"
            isDisabled={dimmed}
            toggleDisplay={toggleDisplay}
          />
        </FadeSection>
      </div>
      <div className="edu">
        <h1>Education</h1>
        <FadeSection visible={false}>
          <EduTriangle
            uni="University of Sydney"
            date="2019-2023"
          ></EduTriangle>
        </FadeSection>
        <FadeSection visible={false}>
          <EduTriangle
            uni="Penn State University"
            date="2020-2020"
          ></EduTriangle>
        </FadeSection>
        <FadeSection visible={false}>
          <EduTriangle
            uni="James Ruse Agricultural High School"
            date="2013-2018"
          ></EduTriangle>
        </FadeSection>
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
      <div style={{ height: "1000px" }} />
    </div>
  );
};

export default Home;
