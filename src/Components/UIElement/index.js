import Aos from "aos";
import React from "react";
import "./styles.css";

export const UIElements = ({ text1, text2, lunk }) => {
  //

  Aos.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div
      data-aos="fade-up"
      className={lunk ? "lunk extra " : "lunk extra self"}
    >
      <div className={"top2"}>
        <div className={"line12"} />
        <h2 className={"h1"}>{text1}</h2>
      </div>
      <div className={"top2"}>
        <h2 className={"h1"}> {text2}</h2>
        <div className={"line13"} />
      </div>
    </div>
  );
};
