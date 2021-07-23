import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import PatientEntry from './components/PatientEntry';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>Test</h1>
      </div>
      <Switch>
        <Route path='/' render={() => <PatientEntry/>}></Route>
      </Switch>
    </>
  );
}

export default App;
