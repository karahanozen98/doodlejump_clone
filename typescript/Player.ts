import Object from "./Object.js";
import KeyboardEventHandler, {
  leftPressed,
  upPressed,
  rightPressed,
  downPressed,
} from "./KeyboardEventHandler.js";
import { WINDOW_WIDTH, WINDOW_HEIGHT, GRAVITY, game } from "./app.js";

export default class Player extends Object {
  private velX: number;
  private velY: number;
  private speed: number;

  constructor(
    width: number,
    height: number,
    posX: number,
    posY: number,
    color: string,
    collisions: boolean,
    gameWindow: any
  ) {
    super(width, height, posX, posY, color, collisions, gameWindow);
    this.velX = 0;
    this.velY = 0;
    this.speed = 10;
    KeyboardEventHandler();
  }

  public setVelX(value) {
    this.velX = value;
  }

  public setVelY(value) {
    this.velY = value;
  }

  public getVelX() {
    return this.velX;
  }

  public getVelY() {
    return this.velY;
  }

  public updatePosition() {
    // add gravity effect
    this.setPosY(this.getPosY() + GRAVITY);
    // add keyboard movements
    if (leftPressed) this.setPosX(this.getPosX() - this.speed);
    if (rightPressed) this.setPosX(this.getPosX() + this.speed);
    if (upPressed) this.setPosY(this.getPosY() - this.speed);
    if (downPressed) this.setPosY(this.getPosY() + this.speed);

    // add collisions
    if (this.getPosX() > WINDOW_WIDTH) this.setPosX(0 - this.getWidth());
    else if (this.getPosX() < -this.getWidth()) this.setPosX(WINDOW_WIDTH);
    if (this.getPosY() == WINDOW_HEIGHT - this.getHeight()) game.init();
  }

  public draw() {
    this.updatePosition();
    const ctx = this.getCtx();
    ctx.fillStyle = this.getColor();
    ctx.fillRect(
      this.getPosX(),
      this.getPosY(),
      this.getWidth(),
      this.getHeight()
    );
  }
}
