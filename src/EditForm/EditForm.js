import React from "react";
import Input from "../Input/Input";
import "./EditForm.css"

function EditForm(props) {
  return (
    <div>
      <form
        className={`form ${props.isEditFormActive ? "active" : ""}`}
        onSubmit={props.onFormSubmit}>
        <Input
          type="text"
          value={props.editName}
          onChange={props.onNameChange}
          placeholder="Name" />
        <Input
          type="email"
          value={props.editEmail}
          onChange={props.onEmailChange}
          placeholder="Email" />
        <Input
          type="tel"
          value={props.editPhone}
          onChange={props.onPhoneChange}
          placeholder="Phone number" />

        <button
          className="form__submit"
          type="submit">
          save
        </button>
    </form>
    <div
      className="overlay"
      onClick={props.onOverlayClick}></div>
    </div>
  )
}

export default EditForm;