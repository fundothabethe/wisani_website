import { motion } from "framer-motion";
import React from "react";
import "./styles.css";

const Pricing = () => {
  return (
    <div className="priceWrapper">
      <motion.div data-aos="fade-up" className={"headingText"}>
        <div className={"top"}>
          <h2 className={"h1"}>How We</h2>
          <div className={"line"} />
        </div>
        <div className={"bottom"}>
          <div className={"lineBtm"} />
          <h2 className={"h1"}> Work</h2>
        </div>
      </motion.div>
      <motion.p data-aos="fade-up" className="priceText">
        - Our prices start from R 600 per session. <br />
        <br /> - We accept all medical aid payments – please request for an
        authorization from your medical aid prior to consultation. <br />
        <br />- Online/virtual counselling sessions are available on WhatsApp
        Video call, Google meet, Zoom, MS Teams and Skype platforms.
      </motion.p>
    </div>
  );
};

export default Pricing;
