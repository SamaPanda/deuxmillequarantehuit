import React from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import Board from './Board.js';

class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: this.createBoard()
      }
      this.action = null;
      ArrowKeysReact.config({
        left: () => {
          this.action = 'left'
          this.newAction();
        },
        right: () => {
          this.action = 'right'
          this.newAction();
        },
        up: () => {
          this.action = 'up'
          this.newAction();
        },
        down: () => {
          this.action = 'down'
          this.newAction();
        }
      });
      

    }
    
    newAction(){
      if(this.action){
        let arr = this.state.squares
        const initialSquaresPosition =arr;
        arr = this.arrayDirection(arr,false);
        arr = arr.map( x => this.moveSquare(x));
        arr = this.arrayDirection(arr,true);
        if(initialSquaresPosition !== arr){
          arr = this.fillEmptySquare(arr);
        }
        this.setState({squares: arr})
      }
    }

    createBoard(){
      var arr = [];
      for (let i = 0; i < 4; i++) {
        arr[i] = new Array(4).fill(null);
      }
      arr = this.fillEmptySquare(arr);
      arr = this.fillEmptySquare(arr);
      return arr;
    }

    fillEmptySquare = (arr) => {
      const isEmpty=[];
      arr.forEach( (x,i) => {
        x.forEach( (y,j) => {
          if( !y ){
            isEmpty.push({i,j})
          }
        })
      })
      if(isEmpty.length > 0){
        const random = isEmpty[Math.floor(Math.random() * isEmpty.length)]
        const newSquareValue = Math.random() > 0.38 ? 2 : 4;
        arr[random.i][random.j] = newSquareValue;
      }else{
        this.gameOver();
      }
      return arr;        
    }

    moveSquare = arr => {
      arr = arr.filter(x => x != null)
      for(let i=0; i<3; i++){
        while(arr[i] && arr[i] === arr[i+1]){
          arr[i] = arr[i] * 2;
          arr.splice(i+1,i+1);
        }
      }
      while(arr.length < 4){
        arr.push(null);
      }
      return arr;
    }

    arrayDirection = (array, retour = false) => {
      switch(this.action){
        case 'down':
          if(retour){
            array = array.map(x => x.reverse())
            array = this.transpose(array)
          }else{
            array = this.transpose(array)
            array = array.map(x => x.reverse())
          }
          break;
        case 'up':
          array = this.transpose(array)
          break;
        case 'right':
          array = array.map(x => x.reverse())
          break;
        case 'left':
          break;
        default:
          break;
       }
       return array;
    }

    gameOver(){
      alert('Game lost !');
    }

    transpose = m => m[0].map((x,i) => m.map(x => x[i]))
    

    render() {
      return (
        <div className="game">
          <div className="game-board" {...ArrowKeysReact.events} tabIndex="0">
            <Board squares={this.state.squares}></Board>
          </div>
        </div>
      );
    }
  }

export default Game;