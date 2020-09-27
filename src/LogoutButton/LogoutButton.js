import React from 'react';

function LogoutButton(props) {

  const onLogoutClick = () => {
    props.auth(false);
  }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full contacts__logout"
      onClick={onLogoutClick}>
      Logout
    </button>
  )
}

export default LogoutButton;