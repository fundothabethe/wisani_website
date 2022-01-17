import anime from "animejs";
import "./styles.css";
import { useEffect } from "react";
import { path } from "./path";

const Svgmorph = ({ bg, colors }) => {
  //

  useEffect(() => {
    anime({
      targets: "#svg1",
      d: [
        {
          value: [path.v1],
        },
        {
          value: [path.v3],
        },
      ],
      duration: 10000,
      direction: "alternate",
      loop: true,
      delay: 0,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#svg2",
      d: [
        {
          value: [path.v2],
        },
        {
          value: [path.v4],
        },
      ],
      duration: 10000,
      direction: "alternate",
      loop: true,
      delay: 0,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#svg3",
      d: [
        {
          value: [path.v3],
        },
        {
          value: [path.v2],
        },
      ],
      duration: 10000,
      direction: "alternate",
      loop: true,
      delay: 0,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#svg4",
      d: [
        {
          value: [path.v1],
        },
        {
          value: [path.v4],
        },
      ],
      duration: 10000,
      direction: "alternate",
      loop: true,
      delay: 0,
      easing: "easeInOutQuad",
    });
  }, []);

  //

  return (
    <div
      style={{
        background: bg,
        zIndex: 1,
      }}
      className="deco"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-0%",
        }}
        className="svgWrapper"
      >
        <svg
          width="308"
          height="242"
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="svg1"
            fillRule="evenodd"
            clipRule="evenodd"
            d={path.v1}
            fill="url(#paint0_linear)"
          />

          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-166"
              y1="183"
              x2="248"
              y2="183"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={colors.color1} />
              <stop offset="1" stopColor={colors.color2} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0%",
          right: "0%",
        }}
        className="svgWrapper"
      >
        <svg
          width="308"
          height="242"
          viewBox="0 0 400 300"
          fill="none"
          preserveAspectRatio="xMinYMin"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="svg2"
            fillRule="evenodd"
            clipRule="evenodd"
            d={path.v2}
            fill="url(#paint0_linear11)"
          />
          <defs>
            <linearGradient
              id="paint0_linear11"
              x1="0"
              y1="132.5"
              x2="269"
              y2="132.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={colors.color3} />
              <stop offset="1" stopColor={colors.color4} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0%",
          right: "50%",
        }}
        className="svgWrapper"
      >
        <svg
          width="308"
          height="242"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="svg3"
            fillRule="evenodd"
            clipRule="evenodd"
            d={path.v3}
            fill="url(#paint0_linear1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear1"
              x1="0"
              y1="108.5"
              x2="308"
              y2="108.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={colors.color5} />
              <stop offset="1" stopColor={colors.color6} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "60%",
        }}
        className="svgWrapper"
      >
        <svg
          width="240"
          height="230"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="svg4"
            fillRule="evenodd"
            clipRule="evenodd"
            d={path.v4}
            fill="url(#paint0_linear2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear2"
              x1="0"
              y1="122.5"
              x2="259"
              y2="122.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={colors.color7} />
              <stop offset="1" stopColor={colors.color8} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Svgmorph;
