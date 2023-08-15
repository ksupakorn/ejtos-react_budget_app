
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch, expenses, Location } = useContext(AppContext);


    const setBudget = (val)=>{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Budget: {

        <input
        required='required'
        type='number'
        id='cost'
        
        style={{size: 10}}
        onChange={(event) => setBudget(event.target.value)}>
        </input>

      }	
    </div>
    );
};

export default Budget;