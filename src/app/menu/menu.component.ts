import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  showPlayerSettings() {
    var computer = document.getElementById("computer");
    computer.style.display = "none";
    var player = document.getElementById("player");
    player.style.display = "block";
  }

  showComputerSettings() {
    var player = document.getElementById("player");
    player.style.display = "none";
    var computer = document.getElementById("computer");
    computer.style.display = "block";
  }
}
