import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'

class App extends Component {
  render() {
    return (
      <div>
        <Pokedex/>
        <Pokemon/>
      </div>
    );
  }
}

export default App;
