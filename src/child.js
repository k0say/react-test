import React from 'react';

var style = {
  cell: {
    height: '25px',
    width: '25px',
  },
};

class Square extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      value: '0',
    }
  }

  render() {
    return (
      <button style={style.cell} onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
        {console.log(this.state)}
      </button>
    );
  }
}

export default Square;
