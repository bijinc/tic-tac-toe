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

  constructor() { }

  ngOnInit() {
    this.initializeBoard();
  }

  initializeBoard() {
    // for (let i = 0; i < size; i++) {
    //   this.board[i] = [];
    //   for (let j = 0; j < size; j++) {
    //     this.board[i][j] = '-';
    //   }
    // }
    for (let i = 0; i < 9; i++) {
      this.board[i] = '-';
    }
  }

  move(index) {
    // update board
    console.log('Update square ' + index + ' with value ' + this.playerTurn);
    this.board[index] = this.playerTurn;
    console.log('New value of square ' + index + ': ' + this.board[index]);
    // check for win
    this.gameWon();

    // update player turn
    this.player1 = !this.player1;
    this.player2 = !this.player2;
    // if (this.playerTurn === 1) {
    //   this.playerTurn = 2;
    // }
    // else if (this.playerTurn === 2) {
    //   this.playerTurn = 1;
    // }
  }

  gameWon() {

  }

}
