import "./styles.css";
import React from "react";

const Footer = () => {
  // Aos.init({
  //   offset: 120,
  //   delay: 0,
  //   duration: 400,
  //   easing: "ease",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-center",
  // });

  return (
    <footer className={"footer"}>
      <div className={"sitemap"}>
        <img
          data-aos="fade-up"
          src={"/logo.svg"}
          alt={"logo"}
          className={"logo"}
        />
        <div className={"siteInfo"}>
          <div data-aos="fade-up" className={"operating"}>
            <h3>Location</h3>
            <p>
              60 Marone street <br />
              Tubatse Complex <br />
              Burgersfort <br />
              1150
            </p>
          </div>
          <div data-aos="fade-up" className={"operating"}>
            <h3>Operation Hours</h3>
            <p>
              Monday - Friday <br />
              06:00 - 16:30 <br />
              Saturday and Sunday <br />
              08:00 - 14:30
            </p>
          </div>
        </div>
      </div>
      <p data-aos="fade-down" data-aos-offset="0" className={"allRights"}>
        All Rights reserved
      </p>
    </footer>
  );
};

export default Footer;
