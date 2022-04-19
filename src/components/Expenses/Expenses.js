import { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const saveExpensesYearHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  console.log(`im from expenses.js ${selectedYear}`);

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpensesYear={saveExpensesYearHandler}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })};
    </div>
  );
};

export default Expenses;
