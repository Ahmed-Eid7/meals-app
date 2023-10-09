import { useState } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import classes from "./Meals.module.css";

const Meals = (props) => {
  const [amount, setAmount] = useState(1);

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const addAmount = () => {
    props.amountToAdd(amount);
  };

  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
