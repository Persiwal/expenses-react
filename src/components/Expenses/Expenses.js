import { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const saveExpensesYearHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => String(item.date.getFullYear()) === selectedYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpensesYear={saveExpensesYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
};

export default Expenses;
