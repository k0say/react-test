import React from 'react';
import './style.css';
import Child from './child.js';

class Parent extends React.Component {
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

  renderChild(i) {
    return (
      <Child
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
        <br />
        <div>{JSON.stringify(this.state.squares)}</div>
        <br />
        <div>
          {this.renderChild(0)}
          {this.renderChild(1)}
          {this.renderChild(2)}
        </div>
      </div>
    );
  }
}

export default Parent;
