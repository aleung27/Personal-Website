import React, { useState, useEffect, useRef } from "react";
import "../scss/FadeSection.scss";

const FadeSection = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        setVisible(e.isIntersecting);
      });
    });

    observer.observe(domRef.current);

    return () => {
      observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${visible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeSection;
