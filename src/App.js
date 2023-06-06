import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.69,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
console.log(expense);
  }

  // using JS code instead of JSX
  // or JSX code will be converted into following JS code behind the scenes.
  // return (
  //   React.createElement('div', {}, React.createElement("h2", {}, "Let's get started!"), React.createElement(Expenses, {expenses:expenses}))
  // );

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;