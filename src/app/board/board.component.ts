import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  player1 = true;
  player2 = false;
  //playerTurn = 1;
  gameOver = false;

  constructor() { }

  ngOnInit() { }

  move(index) {
    // update board
    console.log(index);
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
