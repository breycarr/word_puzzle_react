import React from 'react'

export class Board extends React.Component {
    render() {
      return (
      <div>  
        <h3>{this.props.showBoard.join(", ")}</h3>
      </div>
      )
    }
  }