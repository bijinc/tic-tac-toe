import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  playerTurn = 1;
  gameOver = false;
  constructor() { }

  ngOnInit() { }

  move() {
    if (this.playerTurn === 1) {
      this.playerTurn = 2;
    }
    else if (this.playerTurn === 2) {
      this.playerTurn = 1;
    }
    this.gameWon();
  }

  gameWon() {

  }

}
