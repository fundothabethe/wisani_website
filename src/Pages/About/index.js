import { useEffect } from "react";
import "./styles.css";

const About = () => {
  //

  useEffect(() => {
    //
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="aboutWrapper" className="aboutWrapper">
      <div className="Alltext">
        <div className={"aboutHeading"}>
          <div className={"high"}>
            <h2 className={"h1"}>Get to know</h2>
            <div className={"lineTop"} />
          </div>
          <div className={"low"}>
            <div className={"Btm"} />
            <h2 className={"h1"}> the CEO</h2>
          </div>
        </div>
        <div className="wrapText">
          <div className="apple">
            <p className={"para"}>
              Ms Wisani Hlengiwe Maluka is the founder of Lubanzi Counselling
              and Therapy (LCT). Her Experience has:
            </p>

            <ul>
              <li>More than 8 years Experience</li>
              <li>Degree in Social Worker </li>
              <li>Industry Experience</li>
            </ul>
            <div className="moretext">
              <p>
                Ms Maluka is a University of Limpopo alumni qualified as a
                social worker with more than 8 years in the field. Ms Maluka has
                been trained by FAMSA in different programmes that enrich
                marriages and strengthen families.
              </p>
            </div>
          </div>
          <div className="orange">
            <p>
              She is passionate about making a positive impact in the lives of
              those that she meets through her counselling sessions, public
              speaking; her other interests are on women empowerment and child
              protection.
            </p>
            <p style={{ marginBottom: 0 }}>
              Ms Maluka is currently practicing in the Northern parts of
              Mpumalanga and part of Limpopo.
            </p>
          </div>
        </div>
      </div>
      {/* <Svgmorph
        bg="linear-gradient(to right, #f5f7fa, #c3cfe2)"
        colors={{
          color1: "#E0C3FC",
          color2: "#8EC5FC",
          color3: "#D4FC79",
          color4: "#96E6A1",
          color5: "#CFD9DF",
          color6: "#E2EBF0",
          color7: "#A1C4FD",
          color8: "#C2E9FB",
        }}
      /> */}
    </div>
  );
};

export default About;
