import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
    }, 0);

    return (
        <div className='alert alert-info'>
            <span>Spent so far: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;