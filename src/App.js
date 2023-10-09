import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import "./App.css";

function App() {
  const [amount, setAmount] = useState();

  const amountHandler = (value) => {
    setAmount(value);
  };

  return (
    <>
      <Header amount={amount} />
      <main>
        <Meals amountToAdd={amountHandler} />
      </main>
    </>
  );
}

export default App;
