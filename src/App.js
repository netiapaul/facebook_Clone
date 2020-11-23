// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/login/login.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/home' component={Home}/>
        {/* <Login /> */}
      </React.Fragment>    
    </Router>
  );
}

export default App;
