import { gameWindow } from "./gameWindow.js";
import Object from "./Object.js";
import Player from "./Player.js";

export const WINDOW_WIDTH = 350;
export const WINDOW_HEIGHT = 500;
export const GRAVITY = WINDOW_HEIGHT / 100;

class Game {
  private objects: Array<Object>;

  constructor() {
    this.objects = [];
  }

  public init() {
    gameWindow.draw(WINDOW_WIDTH, WINDOW_HEIGHT);
    this.objects.push(
      new Player(10, 30, 200, 200, "#50ff50", false, gameWindow)
    );
  }

  public start() {
    this.init();
    this.render();
  }

  public render() {
    setInterval(() => {
      gameWindow.context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      this.objects.forEach((obj) => {
        obj.draw();
      });
    }, 1000 / 30); // 30fps
  }
}

export const game = new Game();
game.start();
