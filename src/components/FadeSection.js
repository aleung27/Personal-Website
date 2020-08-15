import React, { useState, useEffect, useRef } from "react";
import "../scss/FadeSection.scss";

const FadeSection = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
        }
      });
    });

    observer.observe(domRef.current);

    return () => {
      observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-section ${
        visible ? `visible ${props.classes ? props.classes : ""}` : ""
      } `}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeSection;
