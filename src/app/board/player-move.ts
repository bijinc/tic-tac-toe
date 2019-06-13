export class PlayerMove {
  player: string;
  moveNum: number;
  index: number;

  constructor (player:string, moveNum:number, index:number) {
    this.player = player;
    this.moveNum = moveNum;
    this.index = index;
  }
}
