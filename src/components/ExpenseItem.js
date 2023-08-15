
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle,FaMinusCircle,FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleAddExpense = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };
    const handleRedExpense = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };
    const handleDeleteExpense = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };        


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddExpense}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleRedExpense}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;