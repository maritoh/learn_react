
import './NewExpense.css';
import ExpensesForm from './ExpensesForm';

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);

    }

    return <div className="new-expense">
        <ExpensesForm onSaveExpenseData={ onSaveExpenseDataHandler }/>
    </div>
};

export default NewExpense;