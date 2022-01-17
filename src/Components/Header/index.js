import React, { useEffect, useRef, useState, memo } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../../redux/blur";
import { actionType2 } from "../../redux/classname";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useHistory, useLocation } from "react-router";

const Header = () => {
  //

  const dispatch = useDispatch();
  const blurOn = useSelector((state) => state.blur);

  var list = useRef(null);
  var x = useRef(null);
  var y = useRef(null);
  var z = useRef(null);

  var list1 = useRef(null);
  var list2 = useRef(null);
  var list3 = useRef(null);
  var list4 = useRef(null);

  const location = useLocation();
  const history = useHistory();

  // Aos.init({
  //   offset: 120,
  //   delay: 0,
  //   duration: 400,
  //   easing: "ease",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-bottom",
  // });

  const [scrollPosition, setScrollPosition] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= window.screen.height) setScrollPosition(true);
    else setScrollPosition(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    //

    if (window.screen.width < 700) {
      if (blurOn) {
        gsap.to(list.current, { x: "100vw", opacity: 0, display: "none" });
        gsap.to(x.current, {
          rotation: 0,
          y: 0,
          skewX: 0,
        });
        gsap.to(y.current, {
          rotation: 0,
          y: 0,
          skewX: 0,
        });
        gsap.to(z.current, {
          width: "20px",
        });
      } else {
        gsap.to(list.current, {
          x: 0,
          opacity: 1,
          display: "flex",
        });
        gsap.to(x.current, {
          rotation: -45,
          skewX: "100px",
        });
        gsap.to(y.current, {
          rotation: 45,
          skewX: "100px",
        });
        gsap.to(z.current, {
          width: 0,
        });
      }
    }
  }, [blurOn]);

  //

  const navList = (text, to) => {
    return (
      <li
        onClick={() => {
          //

          //

          window.screen.width < 700 &&
            dispatch({
              type: actionType.SET_BLUR,
            });

          //

          dispatch({
            type: actionType2.SET_CLASS,
            class: to,
          });

          if (location.pathname !== "/") {
            history.push("/");
            window.scrollTo(0, 0);
          }
        }}
        className={text !== "Contacts" ? "list" : "list contacts"}
      >
        {text}
      </li>
    );
  };

  //

  const variant = {
    home: {
      backdropFilter: "blur(3px)",
      boxShadow: blurOn ? "0px 10px 5px #808080" : "0px 0px 0px #808080",
    },
    landing: {
      backgroundColor: "#e5cdc8",
      // backdropFilter: blurOn ? "blur(0px)" : "blur(10px)",
      backdropFilter: "blur(10px)",
      boxShadow: "0px 0px 0px #808080",
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.header
      variants={variant}
      // data-aos="fade"
      // data-aos-duration="1800"
      animate={scrollPosition ? "home" : "landing"}
      className={"header_container"}
    >
      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/");
          window.scrollTo(0, 0);
        }}
        className={"logo"}
        src="/logo.svg"
        alt="logo"
      />
      <ul
        onClick={() =>
          dispatch({
            type: actionType.SET_BLUR,
          })
        }
        className={"menu"}
      >
        <li ref={z} className={"menuLines"} />
        <li ref={x} className={"menuLines"} />
        <li ref={y} className={"menuLines"} />
      </ul>
      <ul ref={list} className={"navList"}>
        {navList("Home", "landing_container", list1)}
        {navList("About", "aboutContainer", list2)}
        {navList("Services", "servicesContainer", list3)}
        {navList("Contacts", "contactsContainer", list4)}
      </ul>
    </motion.header>
  );
};

export default memo(Header);
