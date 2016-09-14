import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeatGrid from './components/BeatGrid';

class App extends Component {
  render() {
    return (
      <div className="App">Sup
        <BeatGrid/>
      </div>
    );
  }
}

export default App;
