import React from "react";
import { Button } from "react-bootstrap";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import "./styles.css";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import WorkIcon from "@mui/icons-material/Work";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Aos from "aos";
import { useHistory } from "react-router";

const MoreServices = () => {
  //

  Aos.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  const history = useHistory();

  //fnctions

  const card = (title, text, link) => (
    <>
      <h3 className="cardHeading">{title}</h3>
      <p style={{ textAlign: "center" }}>{text}</p>
      <Button
        style={{ width: "100%", textAlign: "center" }}
        onClick={() => history.push("/services", { id: link })}
        variant="primary"
      >
        Learn more
      </Button>
    </>
  );

  return (
    <div className="servicesWrapper">
      <div data-aos="fade-up" className="card" style={{ width: "18rem" }}>
        <FamilyRestroomIcon style={{ height: "2rem", width: "2rem" }} />
        {card(
          "Family Therapy",
          "Families sometimes go through stresses such as divorce, illness, death, financial strain or even trauma.",
          "family"
        )}
      </div>

      <div data-aos="fade-up" className="card" style={{ width: "18rem" }}>
        <AirlineSeatFlatIcon style={{ height: "2rem", width: "2rem" }} />
        {card(
          "Grif/Loss of loved ones",
          "We are unable to take away the loss or grief feelings but our highly experienced and trained counsellors will walk alongside you through your journey of grief, whether you come to us as an individual, couple or family.",
          "grif"
        )}
      </div>
      <div data-aos="fade-up" className="card" style={{ width: "18rem" }}>
        <AccessibilityIcon style={{ height: "2rem", width: "2rem" }} />
        {card(
          "Trauma",
          "We understand that talking about trauma can be painful at times. Our counsellors are there for you to help make the process of healing an enriching one.",
          "trauma"
        )}
      </div>
      <div data-aos="fade-up" className="card" style={{ width: "18rem" }}>
        <WorkIcon style={{ height: "2rem", width: "2rem" }} />
        {card(
          "Workplace conflicts",
          "This programme is designed to assist your employees to increase workplace productivity. Unhealthy or dysfunctional relationships make unproductive employees.",
          "work"
        )}
      </div>
      <div data-aos="fade-up" className="card" style={{ width: "18rem" }}>
        <ChildCareIcon style={{ height: "2rem", width: "2rem" }} />
        {card(
          "Parenting issues",
          "In family counselling everyone gets a say and gets heard. We provide a safe space with a trained counsellor in order to help you explore the difficulties in your family, even if it seems insignificant.",
          "family"
        )}
      </div>
    </div>
  );
};

export default MoreServices;
