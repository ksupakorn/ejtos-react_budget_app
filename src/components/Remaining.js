import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Currency, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
    }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Currency}{budget-totalExpenses}</span>
        </div>
    );
};

export default Remaining;