import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // player1 = true;
  // player2 = false;
  board: string[] = [];
  playerTurn = 'X';
  gameOver = false;
  moves = 0;

  constructor() { }

  ngOnInit() {
    this.initializeBoard();
  }

  initializeBoard() {
    for (let i = 0; i < 9; i++) {
      this.board[i] = null;
    }
  }

  move(index) {
    // print board
    for (let i = 0; i < 3; i++) {
      console.log(this.board[i] + ' ')
    }
    for (let i = 3; i < 6; i++) {
      console.log(this.board[i] + ' ')
    }
    for (let i = 6; i < 9; i++) {
      console.log(this.board[i] + ' ')
    }

    // update board
    console.log('Update square ' + index + ' with value ' + this.playerTurn);
    this.board[index] = this.playerTurn;
    console.log('New value of square ' + index + ': ' + this.board[index]);
    this.moves++;

    // check for win
    this.gameWon();

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

  gameWon() {
    if (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()) {
      // disable board
    }

  }

  checkHorizontal() {
    for (let i = 0; i < 3; i=i+3) {
      if (this.board[i] === this.board[i+1] && this.board[i+1] === this.board[i+2]) {

        console.log("Game won");
        return true;
      }
    }
    return false;
  }

  checkVertical() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i] === this.board[i+3] && this.board[i+3] === this.board[i+6]) {
        //console.log("Game won");
        return true;
      }
    }
    return false;
  }

  checkDiagonal() {
    for (let i = 0; i <= 2; i=i+2) {
      if (this.board[i+0] === this.board[4] && this.board[4] === this.board[8-i]) {
        console.log("Game won");
        return true;
      }
    }
    return false;
  }

}
