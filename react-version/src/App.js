import React, { Component } from 'react';
import './App.css';
import Game from './phaser/Game';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit 
          </p>
          <Game/>
        </header>
      </div>
    );
  }
}

export default App;
