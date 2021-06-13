import {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onSelectHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;