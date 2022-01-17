import React from "react";
import About from "../../Components/About";
import Contacts from "../../Components/Contacts";
import Landing from "../../Components/Landing";
import MoreServices from "../../Components/MoreServices";
import Pricing from "../../Components/pricing";
import Services from "../../Components/Services";
import Test from "../../Components/Testimony";

const Home = () => {
  return (
    <>
      <Landing />
      <Pricing />
      <Services />
      <MoreServices />
      <About />
      <Test />
      <Contacts />
    </>
  );
};

export default Home;
