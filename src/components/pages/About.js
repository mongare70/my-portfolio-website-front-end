import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { useHistory } from "react-router";

import classes from "./About.module.css";
import hillary from "../assets/hillary.jpeg";
import Header from "../layouts/Header";

const About = () => {
  const history = useHistory();

  const experienceHandler = () => {
    history.replace("/experience");
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.control2}>
        <div className={classes.hillary}>
          <img
            className={classes["hillary-image"]}
            src={hillary}
            alt="Hillary"
          />
          <p>“Design is intelligence made visible.” --Alina Wheeler</p>
        </div>
      </div>
      <div className={classes.control}>
        <div className={classes.text1}>Hi there, I'm</div>
        <div className={classes.name}>Hillary Mongare.</div>
        <div className={classes.title}>
          <span className={classes["title-name"]}>Full Stack Developer</span>
          &nbsp;
          <span className={classes["title-description"]}>
            ready to turn your ideas into functional &amp; beautiful
            experiences.
          </span>
        </div>
        <button onClick={experienceHandler}>
          More about me
          <span className={classes.icon}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default About;
