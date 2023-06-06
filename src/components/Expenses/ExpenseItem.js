import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;

// there should be single route element so we should nest above side by side div
// inside another div
// in JSX code we should use className instead of class
// inside {} we can run basic JS expression ex: {1+1}
// props is object of react attributes example:
// props = {
//     title : {expenses[0].title},
//     amount : {expenses[0].amount},
//     date : {expenses[0].date}
// }
// if there is no statements or something inside the element then we can write element
// as self closing tag ex: <ExpenseDate/>
//this approach of building UI using smaller blocks(components) is called composition