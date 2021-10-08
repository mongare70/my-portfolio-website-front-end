import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import Header from "../layouts/Header";
import classes from "./Experience.module.css";
import skills from "../assets/code.png";

const Experience = () => {
  return (
    <Fragment>
      <Header />
      <div className={classes.skills}>
        <img className={classes["skills-image"]} src={skills} alt="Skills" />
      </div>
      <div className={classes.control}>
        <div className={classes.experience}>
          <h1>Experience</h1>
          <p>
            As for me everyday is a learning experience. It’s impossible to know
            everthing but I get to practice on my craft as much as possible.{" "}
          </p>
          <p>Here are the technologies that I’ve been working with recently;</p>
          <div className={classes["skills-list"]}>
            <div className={classes["skills-list-item"]}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ES6+</li>
              <li>React</li>
              <li>Netlify</li>
              <li>Figma</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>Python3</li>
              <li>Flask</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Spring Boot</li>
              <li>Heroku</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>MySQL</li>
              <li>SQLite3</li>
              <li>PostgreSQL</li>
            </div>
            <div className={classes["skills-list-item"]}>
              <li>VS Code</li>
              <li>Eclipse IDE</li>
            </div>
          </div>
          <p className={classes.recommendation}>
            If you would like to know more about me or are simply curious feel
            free to download my CV or get in touch.
          </p>
          <button className={classes.actions}>
            Download CV
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faFileDownload} />
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
