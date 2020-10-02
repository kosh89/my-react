import React from "react";

function Input(props) {

  return (
    <input className="form__input"
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      required />
  )
}

export default Input;