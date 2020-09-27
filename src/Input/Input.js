import React from 'react';

function Input(props) {

  return (
    <input className="form__input"
      onChange={props.onchange}
      value={props.value}
      type={props.type}
      required />
  )
}

export default Input;