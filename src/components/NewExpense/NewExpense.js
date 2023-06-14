import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpenseForm, setAddExpenseForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpenseForm(false)
  };

  const newExpenseBtnHandler = () => {
    setAddExpenseForm(true);
  };

  const cancelBtnHandler = () => {
    setAddExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!addExpenseForm && (
        <button type='button' onClick={newExpenseBtnHandler}>Add New Expense</button>
      )}
      {addExpenseForm && (
        <ExpenseForm
          cancel={cancelBtnHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
