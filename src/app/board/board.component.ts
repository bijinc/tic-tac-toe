import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  player1 = 'PLAYER 1';
  player2 = "PLAYER 2";
  constructor() { }

  ngOnInit() {
  }

}
