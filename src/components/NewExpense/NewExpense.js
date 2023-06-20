import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpenseForm, setAddExpenseForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    // if (
    //   enteredExpenseData.title === "" ||
    //   enteredExpenseData.amount === "" ||
    //   enteredExpenseData.date === new Date("")
    // ) {
    //   alert("Please Add Expense");
    //   return;
    // }
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpenseForm(false);
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
        <button type="button" onClick={newExpenseBtnHandler}>
          Add New Expense
        </button>
      )}
      {addExpenseForm && (
        <ExpenseForm
          onCancel={cancelBtnHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
