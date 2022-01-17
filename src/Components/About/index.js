import Aos from "aos";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import "./styles.css";

const About = () => {
  //
  const history = useHistory();

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      Aos.refresh({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  window.addEventListener("wheel", checkScrollDirection);

  // Aos.init({
  //   offset: 120,
  //   delay: 0,
  //   duration: 400,
  //   easing: "ease",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-bottom",
  // });

  return (
    <div id={"aboutContainer"} className={"aboutContainer"}>
      <div data-aos="fade-up" className={"headingText"}>
        <div className={"top"}>
          <h2 className={"h1"}>Get to know</h2>
          <div className={"line"} />
        </div>
        <div className={"bottom"}>
          <div className={"lineBtm"} />
          <h2 className={"h1"}> the CEO</h2>
        </div>
      </div>
      <section className={"contentWrapper"}>
        <div
          style={{ margin: "0 auto" }}
          onClick={() => history.push("/about")}
          className={"picText"}
        >
          <Card
            style={{
              width: window.screen.width > 280 ? "18rem" : "100%",
            }}
          >
            <Card.Img variant="top" src={"/wisani.jpg"} />
            <Card.Body>
              <Card.Title className="ceoText">CEO Wisani</Card.Title>
              <Button
                style={{
                  color: "white",
                  width: "100%",
                }}
                variant="info"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div id="textOnly" className={"textOnly"}>
          <p data-aos="fade-up" className={"para"}>
            Ms Wisani Hlengiwe Maluka is the founder of Lubanzi Counselling and
            Therapy (LCT). Ms Maluka is a University of Limpopo alumni qualified
            as a social worker with more than 8 years in the field.
          </p>

          <p data-aos="fade-up" className={"para"}>
            Ms Maluka has been trained by FAMSA in different programmes that
            enrich marriages and strengthen families. She is passionate about
            making a positive impact in the lives of those that she meets
            through her counselling sessions, public speaking; her other
            interests are on women empowerment and child protection. Ms Maluka
            is currently practicing in the Northern parts of Mpumalanga and part
            of Limpopo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
