import React, { useState, useContext } from "react";
import "./Login.css";
import users from "../users.json";
import {UserContext} from '../UserContext';

const Login = (props) => {
  const [authorizedUser, setAuthorizedUser] = useContext(UserContext);
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onLoginChange = (e) => {
    setLoginName(e.target.value);
  }

  const onPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (users.find((user) => {
      setAuthorizedUser(user.name);
      return user.login === loginName && user.password === loginPassword;
    })) {
      props.auth(true);
    }
  }

  return (
    <div>
      <form className="w-full max-w-sm login-form"
        onSubmit={onFormSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Login
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              value={loginName}
              onChange={onLoginChange}
              type="text"
              placeholder="Your login"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              value={loginPassword}
              onChange={onPasswordChange}
              placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;