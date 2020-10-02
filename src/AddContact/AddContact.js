import React from "react";

function AddContact(props) {

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full contacts__add"
      onClick={props.onAddContactClick}>
      Add Contact
    </button>
  )
}

export default AddContact;