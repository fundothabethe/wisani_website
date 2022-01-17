import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import Blur from "./Components/blur";
import Services from "./Pages/Services";
import { useSelector } from "react-redux";
import ScrollToTop from "./Components/srolltotop";

function App() {
  //

  const classname = useSelector((state) => state.classname.class);

  useEffect(() => {
    //

    if (classname === "") return;
    else document.getElementById(classname).scrollIntoView();
  }, [classname]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Blur />
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/appointment">
          <Appointment />
        </Route>

        <Route path="/services">
          <Services />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
