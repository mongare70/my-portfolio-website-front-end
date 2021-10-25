import { Link } from "react-router-dom";

import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.control}>
      <div className={classes["main-title"]}>404</div>
      <div className={classes["sub-title"]}>Whoops!</div>
      <div className={classes.description}>
        We couldn't find the site you were looking for.
      </div>
      <div className={classes.goto}>
        <Link to="/">back to about</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
