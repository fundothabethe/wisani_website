import React, { useState } from "react";
import "./styles.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { data } from "./data";

const Test = () => {
  //-----------states

  const [index, setIndex] = useState(Math.floor(data.length / 2));

  // Aos.init({
  //   offset: 120,
  //   delay: 0,
  //   duration: 400,
  //   easing: "ease",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-bottom",
  // });

  // functions

  const nextFunction = () => {
    //next testimony

    if (index === data.length - 1) return;
    else setIndex((index) => index + 1);
  };

  const prevFunction = () => {
    //prev testimony

    if (index === 0) return;
    else setIndex((index) => index - 1);
  };

  const testimony = () => {
    //

    const e = data[index];

    return (
      <div className={"tests"}>
        <p data-aos="fade-up" className={"content"}>
          {`"${e.message}"`}
        </p>
        <h3 data-aos="fade-up" className={"testName"}>
          {e.name}
        </h3>
        <h4 data-aos="fade-up" className={"testRelation"}>
          {e.relationship}
        </h4>
      </div>
    );
  };

  return (
    <>
      <div className={"testContainer"}>
        <h2 data-aos="fade-up" className={"testHeading"}>
          What people say about the service?
        </h2>
        <div data-aos="fade-up" className={"rowFlex"}>
          {testimony()}
        </div>
        <div className={"testNext"}>
          <div
            style={{
              color: index === 0 ? "rgba(77, 77, 77, 0.274)" : "",
              borderBlockColor: index === 0 ? "rgba(77, 77, 77, 0.274)" : "",
            }}
            onClick={prevFunction}
            className={"prev"}
          >
            <NavigateNextIcon />
          </div>
          <div
            style={{
              color: index === data.length - 1 ? "rgba(77, 77, 77, 0.274)" : "",
              borderBlockColor:
                index === data.length - 1 ? "rgba(77, 77, 77, 0.274)" : "",
            }}
            onClick={nextFunction}
            className={"next"}
          >
            <NavigateNextIcon />
          </div>
        </div>
        <div className={"testdots"}>
          {data.map((e, i) => {
            return (
              <span
                data-aos="fade-up"
                key={i}
                style={{
                  backgroundColor: index === i ? "#e09b3d" : "",
                }}
                className={"testdot"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
