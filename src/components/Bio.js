import image from "../assets/meals.jpg";

import classes from "./Bio.module.css";

const Bio = () => {
  return (
    <div className={classes.bio}>
      <img src={image} alt="Meals Tabel" />
      <div>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in time
          and of course by ecperienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Bio;
