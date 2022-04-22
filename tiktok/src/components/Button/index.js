import styles from "./Button.module.scss";
import clsx from "clsx";

function Button({ primary , disable }) {
  const classes = clsx(styles.button, {
    [styles.primary]: primary,
    "d-flex": true,
    [styles.disable]: disable,
  });
  return (
    <div className="">
      <button className={classes}>Click me!</button>
    </div>
  );
}

export default Button;
