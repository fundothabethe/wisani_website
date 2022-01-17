import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Blur = () => {
  //

  var blury = useRef(null);
  const blurOn = useSelector((state) => state.blur);
  //

  useEffect(() => {
    //
    if (blurOn)
      gsap.to(blury, {
        opacity: 0,
        display: "none",
        duration: 1,
        height: "0",
        delay: 0.5,
        backdropFilter: "blur(0px)",
      });
    else
      gsap.to(blury, {
        opacity: 1,
        display: "block",
        duration: 1,
        delay: 0.5,
        height: "100%",
        backdropFilter: "blur(4px)",
      });
  }, [blurOn]);

  //

  return (
    <div
      ref={(e) => (blury = e)}
      style={{
        width: "100%",
        height: "0",
        position: "fixed",
        display: "none",
        opacity: 0,
        zIndex: 3,
      }}
    />
  );
};

export default Blur;
