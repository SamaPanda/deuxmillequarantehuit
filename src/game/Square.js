import React from 'react';
import './Square.css';

class Square extends React.Component {

      render() {
        return (
            <div className={`square square-${this.props.value}`} >{this.props.value}</div>
        );
      }
}

export default Square;