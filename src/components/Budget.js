import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { Currency,budget,dispatch } = useContext(AppContext);

  const setBudget = (val)=>{
    dispatch({
        type: 'SET_BUDGET',
        payload: val,
    })
}


  return (
        <div className='alert alert-secondary'>Budget: {Currency}{

        <input
        required='required'
        type='number'
        id='budget'
        value={budget}
        style={{size: 10}}
        onChange={event=>setBudget(event.target.value)}>
        </input>

      }	
    </div>
    );
};

export default Budget;