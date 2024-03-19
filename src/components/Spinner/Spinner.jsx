import classes from './Spinner.module.scss';

export default function Spinner() {
  return (
  <div className={classes.loaderContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
}
