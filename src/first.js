import React from 'react';
import './style.css';
import Square from './child.js';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null | undefined),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = 'This is the status'; 
    return (
      <div>
        <div>{status}</div>
        <br/>
        <div>{JSON.stringify(this.state.squares)}</div>
        <br/>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

export default First;
