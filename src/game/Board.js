import React from 'react';
import './Board.css';
import Square from './Square.js';

class Board extends React.Component {

      
      renderSquare(i,j) {
        return <Square value={this.props.squares[i][j]}></Square>;
      }

      render() {
        return (
          <>
          <div >
            <div className="board-row">
              {this.renderSquare(0,0)}{this.renderSquare(0,1)}{this.renderSquare(0,2)}{this.renderSquare(0,3)}
            </div>
            <div className="board-row">
              {this.renderSquare(1,0)}{this.renderSquare(1,1)}{this.renderSquare(1,2)}{this.renderSquare(1,3)}
            </div>
            <div className="board-row">
              {this.renderSquare(2,0)}{this.renderSquare(2,1)}{this.renderSquare(2,2)}{this.renderSquare(2,3)}
            </div>
            <div className="board-row">
              {this.renderSquare(3,0)}{this.renderSquare(3,1)}{this.renderSquare(3,2)}{this.renderSquare(3,3)}
            </div>
          </div>
          </>
        );
      }


}

export default Board;