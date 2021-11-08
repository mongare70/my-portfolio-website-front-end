import { Fragment } from "react";

import Header from "../layouts/Header";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <Fragment>
      <Header />
      <div className={classes.control}>
        <h1>Projects</h1>
        <p>
          This section includes school projects, personal projects, course
          projects, and boot camp projects.
        </p>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://momshavethistosay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Moms Have This To Say Website</h2>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Accommodation_Complaints_Management_System"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Accommodation Complaints Management System</h2>
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/my-portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>My Portfolio Website</h2>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Currency-Converter-CLI-Application-PyInquirer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Currency Converter (PyInquirer)</h2>
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/Currency-Converter-CLI-Application-Fire-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Currency Converter (Python Fire)</h2>
            </a>
          </div>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>CMS (PHP)</h2>
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <a
              href="https://github.com/mongare70/CMS---React-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>CMS (React-Flask)</h2>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
