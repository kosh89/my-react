import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [authorizedUser, setAuthorizedUser] = useState("");

  return (
    <UserContext.Provider value={[authorizedUser, setAuthorizedUser]}>
      {props.children}
    </UserContext.Provider>
  );
}