import React from 'react';
import './App.css';
import { NewGameButton, VowelButton, ConsonantButton } from './Buttons'
import { PuzzleGenerator } from './PuzzleGenerator';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { game: null }
  }

  createGame() {
    this.setState({ game: new PuzzleGenerator() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-title">
          <h1>
            Word Puzzle Game!
          </h1>
        </header>
        { !this.state.game && <NewGameButton createGame={() => this.createGame()}/> }
        { this.state.game && <h3>Choose Your Letters</h3> }
        <br />
        <br />
        { this.state.game && <ConsonantButton /> }
        { this.state.game && <VowelButton /> }
      </div>
    );
  }
}