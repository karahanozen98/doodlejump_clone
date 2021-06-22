import { gameWindow } from "./gameWindow.js";
import GameObject from "./GameObject.js";
import Player from "./Player.js";
import Step from "./Step.js";
import { collisionDetection } from "./CollisionDetection.js";

export const WINDOW_WIDTH = 350;
export const WINDOW_HEIGHT = 500;
export let GRAVITY = WINDOW_HEIGHT / 1000;

class Game {
  private objects: Array<GameObject>;
  public player: Player;

  constructor() {
    this.objects = [];
  }

  public init() {
    gameWindow.draw(WINDOW_WIDTH, WINDOW_HEIGHT);
    this.player = new Player(20, 50, 150, 100, "#50ff50", gameWindow);
    this.objects.push(this.player);
    this.objects.push(new Step(100, 220));
    this.objects.push(new Step(100, 380));
    this.objects.push(
      new GameObject(WINDOW_WIDTH, 20, 0, 490, "#ddd", true, gameWindow)
    );
  }

  public run() {
    this.objects.forEach((obj) => {
      if (!(obj instanceof Player)) obj.setPosY(obj.getPosY() + 1);
    });
  }

  public start() {
    this.init();
    this.run();
    this.render();
  }

  public stop() {
    this.objects = [];
  }

  public render() {
    setInterval(() => {
      collisionDetection(this.objects);
      this.run();
      gameWindow.context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
      this.objects.forEach((obj) => {
        obj.draw();
      });
    }, 1000 / 60); // 30fps
  }
}

export const game = new Game();
game.start();
