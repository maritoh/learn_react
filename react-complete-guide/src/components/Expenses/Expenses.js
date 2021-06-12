import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2021');
  const onSelectHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onSelectHandler}
        />
        {expenses.map((ex) => (
          <ExpenseItem
            key={ex.id}
            title={ex.title}
            amount={ex.amount}
            date={ex.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;