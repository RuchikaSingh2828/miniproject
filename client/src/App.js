import './App.css';
import Confirmation from './components/Confirmation';
import Home from './components/Home';
import {
  Route,
} from "react-router-dom";


import React from 'react';

function App() {
  return (
    <div className="App">
        <Route exact path="/" render={(props) => <Home /> } />
        <Route exact path="/confirmation" render={(props) => <Confirmation /> } />
    </div>
  );
}

export default App;
