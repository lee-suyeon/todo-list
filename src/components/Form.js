import React from 'react';
import './Form.css';

const Form = ( { value, onChange, onKeyPress, onCreate } ) => { 
   return (
      <div className="form">
         <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
         <div className="create-button" onClick={onCreate}>추가</div>
      </div>
   )
}

export default Form;
