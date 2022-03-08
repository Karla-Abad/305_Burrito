import React from 'react';
import {Router} from "@reach/router"
import './App.css';
import AccountForm from './components/AccountForm';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import UpdateAccount from './components/UpdateAccount';


const App=() => {
  return (
    <div className="App">
     <Router>
       <AccountForm path="/register" default/>
       <Home path="/home" />
       <LoginForm path="/login" />
       <UpdateAccount path="/accounts/:id" />
     </Router>
    </div>
  );
}

export default App;
