import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div class="btn btn-success"> Currency ({
        <select class="btn btn-success dropdown-toggles"  name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pond</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      })
    </div>
    );
};

export default Currency;