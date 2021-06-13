import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  // const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2021');
  const onSelectHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear() == filteredYear
  );

  let expensesContent = <p>No Expenses Found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((ex) => (
      <ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onSelectHandler}
        />
        { expensesContent }
      </Card>
    </div>
  );
}

export default Expenses;