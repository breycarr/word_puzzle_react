import React from 'react';
import { PuzzleGenerator } from './PuzzleGenerator'

export class NewGameButton extends React.Component {
    render() {
        return <button onClick={this.props.createGame}>New Game</button>;
    }
}

export class ConsonantButton extends React.Component {
    render() {
        return <button>Consonant</button>
    }
}

export class VowelButton extends React.Component {
    render() {
        return <button>Vowel</button>
    }    
}

