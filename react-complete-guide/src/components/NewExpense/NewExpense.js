
import { useState } from 'react';
import './NewExpense.css';
import ExpensesForm from './ExpensesForm';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const onCancelHandler = cancelData => {
        setShowForm(false)
    }

    const content = showForm ? (
      <ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={onCancelHandler} />
    ) : (
      <button onClick={() => setShowForm(true)}> Add New Expense </button>
    );

    return <div className="new-expense">
        {content}
    </div>
};

export default NewExpense;