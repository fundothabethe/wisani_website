import { Form, Button, Alert } from "react-bootstrap";
import { Calendar } from "react-date-range";
import "./styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";
import Aos from "aos";

const Appointment = () => {
  //

  const [date, setDate] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [sent, setSent] = useState("");
  const [username, setUsername] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setEmail] = useState(null);
  const [err, setErr] = useState(false);
  const [showText, setShowText] = useState(false);

  var successText = useRef(null);

  Aos.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  useEffect(() => {
    //

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showText) {
      gsap.to(successText, { display: "block", opacity: 1 });
    } else {
      gsap.to(successText, { display: "none", opacity: 0 });
    }

    const time = setTimeout(() => {
      setShowText(false);
      setSent("");
    }, 5000);

    return () => clearTimeout(time);
  }, [showText]);
  //

  const sendEmail = (e) => {
    e.preventDefault();
    setShowText(true);
    if (confirm && (contact || email)) {
      setErr(false);

      emailjs
        .send(
          "service_kmufbgj",
          "template_enafcla",
          {
            to_name: "Lubanzi Admin",
            from_name: username,
            reply_to: email,
            contact,
            message: `This is an appointment meeting with ${username} on the ${date}. Please confirm with him/her on ${
              email || contact
            }`,
          },
          "user_fvySgr0ec7QEO8Ktzqa2U"
        )
        .then(
          (result) => {
            setErr(false);
            setConfirm(false);
            setDate(null);
            setSent("Message sent, we will get back to you ASAP");
            e.target.reset();
          },
          (error) => {
            setErr(true);
            if (error !== "") setSent(error.text);
            else setSent("Failed to send message! Please try again");
          }
        );
    } else if (!confirm) {
      setSent("Check confirm date");
      setErr(true);
    } else if (!contact || !email) {
      setSent("Provide Contacts or Email");
      setErr(true);
    }
  };

  return (
    <div className="apointWrapper">
      <Form
        onSubmit={sendEmail}
        className="form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            data-aos="fade-up"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Text data-aos="fade-up" className="text-muted">
          Provide an Email or contact number,
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label data-aos="fade-up">Email address</Form.Label>
          <Form.Control
            type="email"
            data-aos="fade-up"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Text data-aos="fade-up" className="text-muted or">
          OR
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label data-aos="fade-up">Contact Number</Form.Label>
          <Form.Control
            type="number"
            data-aos="fade-up"
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Contact Number"
          />
        </Form.Group>

        {window.screen.width > 360 ? (
          <>
            <span data-aos="fade-up">
              <Calendar
                style={{ zIndex: 0 }}
                className="calender"
                date={new Date()}
                onChange={(e) => {
                  setConfirm(false);
                  setDate(e.toString().slice(0, 15));
                }}
              />
            </span>

            <Form.Group
              data-aos="fade-up"
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                disabled
                type="text"
                placeholder={date ? date : "Select appointment date"}
              />
            </Form.Group>
          </>
        ) : (
          <Form.Group
            data-aos="fade-up"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
              placeholder={"Provide appointment date"}
            />
          </Form.Group>
        )}

        <Form.Group
          data-aos="fade-up"
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            onChange={() => date && setConfirm(!confirm)}
            checked={confirm}
            type="checkbox"
            label="Confirm date"
          />
        </Form.Group>

        <Form.Text
          data-aos="fade-up"
          ref={(e) => (successText = e)}
          className="text-muted or messageSent"
          initial={{ display: "none", opacity: 0 }}
          animate={
            sent !== ""
              ? { display: "block", opacity: 1 }
              : { display: "none", opacity: 0 }
          }
          transition={{ duration: 1 }}
          style={{
            border: `1px solid ${!err ? "#badbcc" : "#f5c2c7"}`,
            backgroundColor: !err ? "#d1e7dd" : "#f8d7da",
            color: !err ? "#0f5132" : "#842029",
          }}
        >
          {sent}
        </Form.Text>

        <Button data-aos="fade-up" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="costs">
        <Alert style={{ zIndex: -1 }} variant="success">
          <Alert.Heading data-aos="fade-up">Estimated cost</Alert.Heading>
          <p data-aos="fade-up">
            Our prices start from{" "}
            <span
              style={{
                borderRadius: "10px",
                padding: " 0 0.125rem",
                background: "#0f5132",
                color: "#d1e7dd",
              }}
              className="mark"
            >
              R 550
            </span>{" "}
            per hour.
          </p>
          <hr data-aos="fade-up" />
          <p data-aos="fade-up" className="mb-0">
            We accept all medical aid payments – please request for an
            authorization from your medical aid prior to consultation.
          </p>
          <hr data-aos="fade-up" />
          <p data-aos="fade-up">
            Online/virtual counselling sessions are available on WhatsApp Video
            call, Google meet, Zoom, MS Teams and Skype platforms.
          </p>
        </Alert>
      </div>
    </div>
  );
};

export default Appointment;
