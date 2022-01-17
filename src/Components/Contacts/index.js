import React, { useEffect, useRef, useState } from "react";
import { UIElements } from "../UIElement";
import "./styles.css";
import emailjs from "emailjs-com";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

const Contacts = () => {
  //

  const [sent, setSent] = useState("");
  const [username, setUsername] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [message, setMessage] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setEmail] = useState(null);
  const [err, setErr] = useState(false);

  var form = useRef(null);

  //

  // Aos.init({
  //   offset: 120,
  //   delay: 0,
  //   duration: 400,
  //   easing: "ease",
  //   once: false,
  //   mirror: false,
  //   anchorPlacement: "top-bottom",
  // });

  useEffect(() => {
    //
    setTimeout(() => {
      setErr(false);
      setSent("");
    }, 5000);
  }, [err, sent]);

  //functions

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_kmufbgj",
        "template_enafcla",
        {
          to_name: "Lubanzi Admin",
          from_name: username,
          reply_to: email,
          lastname,
          contact,
          message,
        },
        "user_fvySgr0ec7QEO8Ktzqa2U"
      )
      .then(
        (result) => {
          setSent("Message sent, we will get back to you ASAP");
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          setErr(true);
          if (error !== "") setSent(error.text);
          else setSent("Failed to send message! Please try again");
        }
      );
  };

  return (
    <div id="contactsContainer" className={"contactsContainer"}>
      <div data-aos="fade-up" className={"headingText extraHeading"}>
        <h2 className={"h1"}>Contacts</h2>
        <div className={"top"}>
          <div className={"line12"} />
          <h2 className={"h1"}>Us</h2>
        </div>
      </div>
      <section className={"contactWrapper"}>
        <div className={"formContainer"}>
          <UIElements text1={"Leave a"} text2={"message"} />

          <form ref={form} onSubmit={sendEmail} className={"formBig"}>
            <div className={"rowView"}>
              <input
                data-aos="fade-up"
                onChange={(e) => setUsername(e.target.value)}
                required
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                data-aos="fade-up"
                onChange={(e) => setLastname(e.target.value)}
                required
                type="text"
                placeholder="Last Name"
                name="from_name"
              />
            </div>
            <div className={"rowView"}>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="reply_to"
                data-aos="fade-up"
                placeholder="Email"
              />
              <input
                required
                onChange={(e) => setContact(e.target.value)}
                type="number"
                data-aos="fade-up"
                placeholder="Contact Number"
              />
            </div>
            <textarea
              data-aos="fade-up"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              cols={10}
              placeholder="Write us a message"
            />

            <motion.p
              data-aos="fade-up"
              initial={{ display: "none", opacity: 0 }}
              animate={
                sent !== ""
                  ? { display: "block", opacity: 1 }
                  : { display: "none", opacity: 0 }
              }
              transition={{ duration: 1 }}
              style={{ backgroundColor: !err ? "#00ff0054" : "#fc110d98" }}
              className={"messageSent"}
            >
              {sent}
            </motion.p>

            <Button data-aos="fade-up" type="submit" variant="primary">
              <NavigateNextIcon />
              send
            </Button>
          </form>
        </div>
        <div data-aos="fade-up" className={"divideLine"} />
        <div className={"conatctLinks"}>
          <UIElements lunk={"lunk"} text1={"Contact"} text2={"Details"} />

          <div data-aos="fade-up" className={"displayNone"}>
            <div className={"linksHere"}>
              <a
                data-aos="fade-up"
                href="tel:+27716319653"
                className={"oneLink"}
              >
                <img src={"/call.svg"} alt="call" />
                <p> +27 71 631 9653</p>
              </a>
              <a
                data-aos="fade-up"
                href="mailto:info@lubanziwellness.co.za"
                className={"oneLink"}
              >
                <img src={"/email.svg"} alt="email" />
                <p> info@lubanziwellness.co.za</p>
              </a>
            </div>

            {/* <UIElements text1={"Social"} text2={"Media"} lunk={"lunk"} />

            <div data-aos="fade-up" className={"linksHere"}>
              <a
                data-aos="fade-up"
                href="http://www.facebook.com/"
                className={"oneLink"}
              >
                <img src={"/facebook.svg"} alt="facebook" />{" "}
                <p> facebook.com/lubanzi</p>
              </a>
              <a
                data-aos="fade-up"
                href="http://www.facebook.com"
                className={"oneLink"}
              >
                <img src={"/instagram.svg"} alt="whatsapp" />
                <p>Instagram</p>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <div className={"formLinks small"}>
        <form ref={form} onSubmit={sendEmail} className={"formSmall"}>
          <input
            data-aos="fade-up"
            required
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            data-aos="fade-up"
            required
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />

          <input
            required
            data-aos="fade-up"
            onChange={(e) => setContact(e.target.value)}
            type="text"
            placeholder="Contact Number"
          />

          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            cols={10}
            data-aos="fade-up"
            placeholder="Write us a message"
          />
          <motion.p
            data-aos="fade-up"
            initial={{ display: "none", opacity: 0 }}
            animate={
              sent !== ""
                ? { display: "block", opacity: 1 }
                : { display: "none", opacity: 0 }
            }
            transition={{ duration: 1 }}
            style={{ backgroundColor: !err ? "#00ff0054" : "#fc110d98" }}
            className={"messageSent"}
          >
            {sent}
          </motion.p>
          <Button data-aos="fade-up" type="submit" variant="primary">
            <NavigateNextIcon />
            send
          </Button>
        </form>
        <div className={"linkSmall"}>
          <a data-aos="fade-up" href="tel:+27716319653" className={"oneLink"}>
            <img src={"/call.svg"} alt="call" />
          </a>
          <a
            data-aos="fade-up"
            href="mailto:info@lubanziwellness.co.za"
            className={"oneLink"}
          >
            <img src={"/email.svg"} alt="email" />
          </a>

          <a
            data-aos="fade-up"
            href="http://www.facebook.com/"
            className={"oneLink"}
          >
            <img src={"/facebook.svg"} alt="facebook" />{" "}
          </a>
          <a
            data-aos="fade-up"
            href="http://www.facebook.com"
            className={"oneLink"}
          >
            <img src={"/instagram.svg"} alt="whatsapp" />
          </a>
        </div>
      </div>

      {/* <button>
        <NavigateNextIcon /> Send
      </button> */}
      {/* <div className={`${"headingTexts"} ${"extraHeading"}`}>
        <div className={"top"}>
          <div className={"line2"} />
          <h2 className={"h1"}>Learn more.</h2>
        </div>
        <div className={"top"}>
          <h2 className={"h1"}> About the CEO</h2>
          <div className={"line12"} />
        </div>
      </div> */}
    </div>
  );
};

export default Contacts;
