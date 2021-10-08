import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Hillary Logo" />
      </Link>
      <label htmlFor="btn" className={classes.icon}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <input type="checkbox" id="btn" />
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Hire Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
