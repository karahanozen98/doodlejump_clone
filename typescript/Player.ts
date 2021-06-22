import GameObject from "./GameObject.js";
import { typeOf_gameWindow } from "./gameWindow.js";
import listenKeyboardEvents, {
  upPressed,
  leftPressed,
  rightPressed,
} from "./KeyboardEventHandler.js";
import { WINDOW_WIDTH, WINDOW_HEIGHT, GRAVITY, game } from "./app.js";

export default class Player extends GameObject {
  private speed: number;
  private isOntheGround: boolean;

  constructor(
    width: number,
    height: number,
    posX: number,
    posY: number,
    color: string,
    gameWindow: typeOf_gameWindow
  ) {
    super(width, height, posX, posY, color, true, gameWindow);
    this.speed = 5;
  }
  public getIsOnTheGround = (): boolean => this.isOntheGround;
  public setIsOnTheGround = (value: boolean) => (this.isOntheGround = value);

  private enableKeyControls() {
    listenKeyboardEvents();
    // add keyboard movements
    if (upPressed && this.isOntheGround) {
      // jump
      this.setVelY(-GRAVITY * 30);
      this.isOntheGround = false;
    }
    if (leftPressed) this.setPosX(this.getPosX() - this.speed); // go left
    if (rightPressed) this.setPosX(this.getPosX() + this.speed); // go right
  }

  private enableGravity() {
    if (!this.isOntheGround)
      this.setVelY(Math.min(GRAVITY * 15, this.getVelY() + GRAVITY));
  }

  private updatePosition() {
    this.enableKeyControls();
    this.enableGravity();
    this.setPosX(this.getPosX() + this.getVelX());
    this.setPosY(this.getPosY() + this.getVelY());

    // add collisions
    if (this.getPosX() > WINDOW_WIDTH) this.setPosX(0 - this.getWidth());
    else if (this.getPosX() < -this.getWidth()) this.setPosX(WINDOW_WIDTH);
    if (this.getPosY() >= WINDOW_HEIGHT) {
      game.stop();
    }
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
