
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.allocation));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default Remaining;