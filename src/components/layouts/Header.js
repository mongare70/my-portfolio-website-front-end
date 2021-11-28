import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/">
        <img src={logo} className={classes.logo} alt="Hillary Logo" />
      </NavLink>
      <label htmlFor="btn" className={classes.icon}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <input type="checkbox" id="btn" />
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/experience"
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/contact"
          >
            Hire Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
