import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material/";
import gsap from "gsap";
import { Carousel } from "react-bootstrap";

const Landing = () => {
  //------states

  const [index, setIndex] = useState(0);

  var down = useRef();
  const changPic = 3000;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //

  useEffect(() => {
    //

    var t1 = gsap.timeline({
      repeat: Infinity,
      duration: 0,
      delay: 0,
      repeatDelay: 0,
      yoyo: true,
    });
    t1.to(down.current, {
      y: "25%",

      duration: 0.5,
    });
  }, []);

  return (
    <div id={"landing_container"} className={"landing_container"}>
      {/* animateion */}

      <Carousel
        className="slideShow"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item interval={changPic}>
          <img
            className="d-block w-100 session"
            src="./img1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slideTexts">
            {/* <h3 className="slideHeader">Third slide label</h3> */}
            <p className="slideText ">
              {/* Lubanzi Counselling And Therapy is a social <br /> work private
              practice that offers wellness services. */}
              Marriage and Relationships counselling
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={changPic}>
          <img
            className="d-block w-100 session"
            src="./img2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="slideTexts">
            {/* <h3 className="slideHeader">Third slide label</h3> */}
            <p className="slideText">
              Parent-child Relationships
              {/* Help your Children and adolescents, or teens, build social skills
              <br />
              and emotional intelligence as they grow. */}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={changPic}>
          <img
            className="d-block session w-100"
            src="./stress1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="slideTexts">
            <p className="slideText">
              {/* We offer pre-marital counselling to couples <br /> who want to
              commit into marriage. */}
              Changing people from brokenness to wholeness
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={changPic}>
          <img
            className="d-block session w-100"
            src="./img5.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="slideTexts">
            <p className="slideText">
              {/* This programme is designed to assist your employees <br /> to
              increase workplace productivity. */}
              Empolyee Wellness program
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* text */}

      <div className="headingAndText">
        <div className="left">
          <div className="text">
            <h2 className="landingHeading">Therapy and counselling</h2>
            <ul className={"landingList px-0"}>
              <li className={"LandingItems"}>Affordable</li>
              <span className={"circle"} />
              <li className={"LandingItems"}>Effective</li>
              <span className={"circle"} />
              <li className={"LandingItems"}>Practical</li>
            </ul>
          </div>
        </div>
        <Link to="/appointment">
          <h3 className="h3 m-0">Make an Appointment</h3>
        </Link>
        <p className="para my-2">
          We specialize in marriage and <br /> relationships counselling,
        </p>
      </div>

      <div
        ref={down}
        style={{ transform: "translateX(-50%)" }}
        onClick={() => {
          window.scrollTo(0, window.screen.height - window.screen.height * 0.1);
        }}
        className="down"
      >
        <ArrowForwardIos
          style={{
            transform: "rotate(90deg)",
            width: "100%",
            height: "100%",
            color: "#303030",
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
