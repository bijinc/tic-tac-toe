import { Component, OnInit } from '@angular/core';

import { PlayerMove } from './player-move';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  playerMoves: PlayerMove[] = [];
  playerTurn = 'X';
  numMoves = 0;
  gameOver = false;
  message = '';

  constructor() { }

  ngOnInit() {
    this.initializeBoard();
  }

  move (event) {
    // update board
    if (event.target) {
      let index = event.target.parentElement.id;
      console.log('Update square ' + index + ' with value ' + this.playerTurn);
      if (this.board[index] != null) {
        console.log('Invalid move');
      }
      else {
        this.board[index] = this.playerTurn;
        console.log('New value of square ' + index + ': ' + this.board[index]);

        if (this.playerTurn === 'X') {
          // event.target.parentElement.style.background = '#cb1111';
          // event.target.parentElement.classList.remove('square');
          event.target.parentElement.className = 'square1';
        }
        else {
          // event.target.parentElement.style.background = '#0d297f';
          // event.target.parentElement.classList.remove('square');
          event.target.parentElement.className = 'square2';
        }
        // console.log('New move: turn=' + this.playerTurn + ' move=' + this.numMoves + ' index=' + index);
        this.playerMoves[this.numMoves] = new PlayerMove(this.playerTurn, this.numMoves, index);
        console.log(this.playerMoves[this.numMoves]);
        this.numMoves++;

        // check for win
        if (this.gameWon()) {
          this.disableBoard();
        }
        else {
          // update player turn
          if (this.numMoves === 9) {
            this.gameOver = true;
            // document.getElementById("undo").disabled = true;
            this.message = 'It\'s a tie!';
          }
          else {
            if (this.playerTurn === 'X') {
              this.playerTurn = 'O';
            }
            else if (this.playerTurn === 'O') {
              this.playerTurn = 'X';
            }
          }
        }
      }
    }
  }

  gameWon() {
    if (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()) {
      this.gameOver = true;
      this.message = this.playerTurn + ' wins!'
      return true;
    }
    return false;
  }

  checkVertical() {
    for (let i = 0; i < 3; i=i+3) {
      if (this.board[i] === this.board[i+1] && this.board[i+1] === this.board[i+2]) {
        if (this.board[i] != null) {
          console.log("Game won - Vertical");
          return true;
        }
      }
    }
    return false;
  }

  checkHorizontal() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i] === this.board[i+3] && this.board[i+3] === this.board[i+6]) {
        if (this.board[i] != null) {
          console.log("Game won - Horizontal");
          return true;
        }
      }
    }
    return false;
  }

  checkDiagonal() {
    if (this.board[4] == null) {
      return false;
    }
    for (let i = 0; i <= 2; i=i+2) {
      if (this.board[i+0] === this.board[4] && this.board[4] === this.board[8-i]) {
        console.log("Game won - Diagonal");
        return true;
      }
    }
    return false;
  }

  initializeBoard() {
    // this.playerMoves = new Array(9);
    for (let i = 0; i < 9; i++) {
      this.board[i] = null;
    }
  }

  disableBoard() {
    // document.getElementById("undo").disabled = true;
  }

  reset() {
    console.log('Reset');
    for (let i = 0; i < 9; i++) {
      this.board[i] = null;
      // document.getElementById(i as string).style.background = '#fff';
      document.getElementById(<string><any>i).className = 'square';
    }
    this.numMoves = 0;
    this.playerTurn = 'X';
    this.gameOver = false;
    // document.getElementById("undo").disabled = false;
  }

  undo() {
    // console.log('Undo ' + this.numMoves);
    var last = this.playerMoves.pop();
    this.board[last.index] = null;
    document.getElementById(<string><any>last.index).className = 'square';

    if (this.playerTurn === 'X') {
      this.playerTurn = 'O';
    }
    else {
      this.playerTurn = 'X';
    }
    this.numMoves--;
  }

}
