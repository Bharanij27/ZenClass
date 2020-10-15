import React from 'react';
import './App.css';
import {Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import LoginPage from './Components/LoginPage';
import Details from './Components/Details';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <div className="mt-5">
      <Switch>
        <Route path = {routes.home}/>
        <Route path = {routes.users}/>
      </Switch>
      <Switch>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/user">
          <Details/>
        </Route>
        <Route path="/newPass">
          <ResetPassword/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
