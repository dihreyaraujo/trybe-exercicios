import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['comer bacalhau', 'comer peixe', 'beber água', 'dormir'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ol>{compromissos.map((element) => Task(element))}</ol>
        < Header />
        < Content />
        < Footer />
      </div>
    );
  }
}

export default App;
