import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  playerTurn = 'X';
  gameOver = false;
  moves: number = 0;

  constructor() { }

  ngOnInit() {
    this.initializeBoard();
  }

  move (event) {
    // update board
    // console.log('Update square ' + index + ' with value ' + this.playerTurn);
    // this.board[index] = this.playerTurn;
    // console.log('New value of square ' + index + ': ' + this.board[index]);
    //
    // var square = document.getElementById(index); // cache the square
    //
    // square.addEventListener('click', function() {
    //   if (this.playerTurn === 'X') {
    //     square.style.background = #cb1111;
    //   }
    //   else {
    //     square.style.background = #0d297f;
    //   }
    // });

    if (event.target) {
      let index = event.target.parentElement.id;
      // console.log(event.target.parentElement);
      console.log('Update square ' + index + ' with value ' + this.playerTurn);
      if (this.board[index] != null) {
        console.log('Invalid move');
      }
      else {
        this.board[index] = this.playerTurn;
      console.log('New value of square ' + index + ': ' + this.board[index]);

      if (this.playerTurn === 'X') {
        event.target.parentElement.style.background = '#cb1111';
      }
      else {
        event.target.parentElement.style.background = '#0d297f';
      }
      this.moves++;

      // check for win
      if (this.gameWon()) {

      }

      // update player turn
      if (this.moves === 9) {
        console.log("It's a tie!")
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

  gameWon() {
    if (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()) {
      return true;
      // disable board
    }
    return false;
  }

  checkHorizontal(): boolean {
    for (let i = 0; i < 3; i=i+3) {
      if (this.board[i] === this.board[i+1] && this.board[i+1] === this.board[i+2]) {
        if (this.board[i] != null) {
          console.log("Game won");
        }
        return true;
      }
    }
    return false;
  }

  checkVertical(): boolean {
    for (let i = 0; i < 3; i++) {
      if (this.board[i] === this.board[i+3] && this.board[i+3] === this.board[i+6]) {
        if (this.board[i] != null) {
          console.log("Game won");
        }
        //console.log("Game won");
        return true;
      }
    }
    return false;
  }

  checkDiagonal(): boolean {
    if (this.board[4] != null) {
      console.log("Game won");
    }
    for (let i = 0; i <= 2; i=i+2) {
      if (this.board[i+0] === this.board[4] && this.board[4] === this.board[8-i]) {
        console.log("Game won");
        return true;
      }
    }
    return false;
  }

  initializeBoard() {
    for (let i = 0; i < 9; i++) {
      this.board[i] = null;
    }
  }

  disableBoard() {

  }

  reset() {
    for (let i = 0; i < 9; i++) {
      this.board[i] = null;
      // document.getElementById(i).className = "square";
      background-color = #FFF;
    }
    this.moves = 0;
    this.playerTurn = 'X';
  }
}
