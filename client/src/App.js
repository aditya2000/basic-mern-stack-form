import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Form/>
      </div>
    );
  }
}

export default App;
