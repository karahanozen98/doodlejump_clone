import GameObject from "./GameObject.js";
import { gameWindow } from "./gameWindow.js";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./app.js";

export default class Step extends GameObject {
  readonly minWidth = 50;
  private isPlayerOnThis: boolean;
  constructor(x: number, y: number) {
    super(100, 4, x, y, "#ddd", true, gameWindow);
    this.isPlayerOnThis = false;
  }

  
  // public get isPlayerOnThis() : string {
  //   return 
  // }
  

  public randomize() {
    this.setPosY(0);
    this.setWidth(Math.random() * this.minWidth + 50);
    this.setPosX(Math.random() * (WINDOW_WIDTH - 100));
  }
}
