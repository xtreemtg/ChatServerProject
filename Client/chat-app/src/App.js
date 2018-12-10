import React, { Component } from 'react';
import logo from './logo.svg';
import {NameForm} from './FormComponents/NameForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm/>
      </div>
    );
  }
}

export default App;
