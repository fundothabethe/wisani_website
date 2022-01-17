import React from "react";
import "./styles.css";
import "aos/dist/aos.css";
import { useHistory } from "react-router";

const Services = () => {
  //
  // Aos.init({
  //   offset: 120,
  //   delay: 100,
  //   duration: 400,
  //   easing: "ease-in-out",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-top",
  // });

  const history = useHistory();

  //

  return (
    <div id={"servicesContainer"} className={"servicesContainer"}>
      <div className={"content"}>
        <div data-aos="fade-up" data-aos-mirror="true" className={"text"}>
          <div className={"rowText"}>
            <h2 className={"h1"}>Let's Talk</h2>
            <div style={{ marginLeft: "0.5rem" }} className={"line"} />
          </div>
          <div className={"rowText"}>
            <h2 className={"h1"}>Any problem?</h2>
          </div>
        </div>
        <p data-aos="fade-up" className="para">
          We specialize in marriage and relationships counselling, <br />
          families, adults and teenagers. We also offer employee wellness
          services
        </p>
        <div className={"problemsText"}>
          <div className={"problems"}>
            <div
              className={`${
                window.screen.width > 320 ? "problems" : "problem"
              }`}
            >
              <ul data-aos="fade-up" className={"problemsList"}>
                {/* <li
                  onClick={() => history.push("/services", { id: "trauma" })}
                  className={"h3"}
                >
                  Heavy Stress
                </li> */}
                <li
                  onClick={() => history.push("/services", { id: "marriage" })}
                  className={"h3"}
                >
                  Marriages & Relationships
                </li>
                <li
                  onClick={() => history.push("/services", { id: "trauma" })}
                  className={"h3"}
                >
                  Trauma{" "}
                </li>
                <li
                  onClick={() => history.push("/services", { id: "family" })}
                  className={"h3"}
                >
                  Family counselling
                </li>
                <li
                  onClick={() => history.push("/services", { id: "work" })}
                  className={"h3"}
                >
                  Employee Wellness Program{" "}
                </li>
              </ul>
              <ul data-aos="fade-up" className={"problemsList"}>
                <li
                  onClick={() => history.push("/services", { id: "parent" })}
                  className={"h3"}
                >
                  Parenting issues{" "}
                </li>
                <li
                  onClick={() => history.push("/services", { id: "grif" })}
                  className={"h3"}
                >
                  Grief / loss{" "}
                </li>
                <li
                  onClick={() => history.push("/services", { id: "trauma" })}
                  className={"h3"}
                >
                  Anger management issues
                </li>
                {/* <li
                  onClick={() => history.push("/services", { id: "trauma" })}
                  className={"h3"}
                >
                  Depression
                </li> */}
                <li
                  onClick={() => history.push("/services", { id: "work" })}
                  className={"h3"}
                >
                  Workplace conflicts{" "}
                </li>
              </ul>
            </div>
            <div className={"stress1"}>
              <img
                data-aos="fade-up"
                className={"session1"}
                src={"/stress1.jpg"}
                alt="Therapy"
              />
              <img
                data-aos="fade-up"
                className={"session1"}
                src={"/stress2.jpg"}
                alt="Therapy"
              />
            </div>
          </div>
          <p data-aos="fade-up" className={"boldText"}>
            Let's face it Together
          </p>
        </div>
      </div>
      <div className={"stress"}>
        <img
          data-aos="fade-up"
          className={"session"}
          src={"/stress1.jpg"}
          alt="Therapy"
        />
        <img
          data-aos="fade-up"
          className={"session"}
          src={"/stress2.jpg"}
          alt="Therapy"
        />
      </div>
    </div>
  );
};

export default Services;
