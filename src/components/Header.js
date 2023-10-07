import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <div>
        🛒 Your Cart <span>0</span>
      </div>
    </div>
  );
};

export default Header;
