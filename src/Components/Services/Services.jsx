import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Shravan's Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
          I have 1-2 years of JavaScript, ReactJS, CSS, and HTML experience.
          <br />
          I've created various projects using these languages. I'm also familiar
          with
          <br />
          React Native. In addition, I've worked with backend languages such as
          Python
          <br />
          and Java.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#AEF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Database"}
            detail={"MySQL, MongoDB, PostgreSQL"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "12rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, ReactJS, React Native"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "12rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card emoji={Humble} heading={"Backend"} detail={"Python, Java"} />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
