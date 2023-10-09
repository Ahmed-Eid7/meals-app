import classes from "./HeaderCartButtton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>🛒</span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
