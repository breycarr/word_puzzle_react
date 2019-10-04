import React from 'react';

export class NewGameButton extends React.Component {
    render() {
        return <button onClick={this.props.createGame}>New Game</button>;
    }
}

export class ConsonantButton extends React.Component {
    render() {
        return <button onClick={this.props.consonant}>Consonant</button>
    }
}

export class VowelButton extends React.Component {
    render() {
        return <button onClick={this.props.vowel}>Vowel</button>
    }    
}

