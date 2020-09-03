import React, { useState, useEffect, useRef } from "react";
import "../scss/FadeSection.scss";

const FadeSection = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
        }
      });
    });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
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
