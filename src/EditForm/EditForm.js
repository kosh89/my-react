import React from 'react';
import Input from '../Input/Input';
import './EditForm.css'


function EditForm(props) {

  return (
    <form className={`form ${props.isEditFormActive ? 'active' : ''}`}
      onSubmit={props.onformsubmit}>
      <div className="form__overlay"
        onMouseDown={props.onformoverlaymousedown}>
        <Input
          type="text"
          value={props.editName}
          onchange={props.onNameChange} />
        <Input
          type="email"
          value={props.editEmail}
          onchange={props.onEmailChange} />
        <Input
          type="tel"
          value={props.editPhone}
          onchange={props.onPhoneChange} />
        <button className="form__submit"
          onSubmit={props.onsubmit}
          type='submit'>
          save
      </button>
      </div>
    </form>
  )
}

export default EditForm;