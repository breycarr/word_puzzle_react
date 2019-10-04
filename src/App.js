import React from 'react';
import './App.css';
import { NewGameButton, VowelButton, ConsonantButton } from './Buttons';
import { Board } from './Board';
import { PuzzleGenerator } from './PuzzleGenerator';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { game: null, board: null }
  }

  createGame() {
    this.setState({ game: new PuzzleGenerator() });
  }

  consonant() {
    this.state.game.consonant();
    this.setState({ board: this.state.game.showBoard() });

  }

  vowel() {
    this.state.game.vowel();
    this.setState({ board: this.state.game.showBoard() });
  }

  showBoard() {
    this.setState({ board: this.state.game.showBoard() });
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
        { this.state.game && <h3>Choose 9 letters by using the buttons below</h3> }
        { this.state.game && <ConsonantButton consonant={() => this.consonant()}/> }
        { this.state.game && <VowelButton vowel={() => this.vowel()}/> }
        <br />
        { this.state.board && <h3>Your letters are:</h3> }
        { this.state.board && <Board showBoard={this.state.board} /> }
        <br />
      </div>
    );
  }
}