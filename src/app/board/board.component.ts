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
    if (playerTurn === 1) {
      playerTurn = 2;
    }
    else if (playerTurn === 2) {
      playerTurn = 1;
    }
    gameWon();
  }

  gameWon() {

  }

}
