import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Contacts from "./Contacts/Contacts";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
          {isAuthenticated ? <Redirect to="/contacts" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/contacts" /> : <Login auth={setIsAuthenticated} />}
          </Route>
          <Route path="/contacts">
            {isAuthenticated ? <Contacts auth={setIsAuthenticated} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
