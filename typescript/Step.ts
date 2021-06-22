import GameObject from "./GameObject.js";
import { gameWindow } from "./gameWindow.js";

export default class Step extends GameObject {
  constructor(x, y) {
    super(100, 4, x, y, "#ddd", true, gameWindow);
  }
}
