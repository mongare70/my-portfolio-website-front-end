import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
