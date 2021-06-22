import { typeOf_gameWindow } from "./gameWindow.js";

interface type_Position {
  x: [number, number];
  y: [number, number];
}
// game object base class
export default class GameObject {
  private width: number;
  private height: number;
  private color: string;
  private posX: number;
  private posY: number;
  private velX: number;
  private velY: number;
  private collision: boolean;
  private ctx: any;

  constructor(
    width: number,
    height: number,
    posX: number,
    posY: number,
    color: string,
    collisions: boolean,
    gameWindow: typeOf_gameWindow
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.velX = 0;
    this.velY = 0;
    this.collision = collisions;
    this.ctx = gameWindow.context;
  }
  // setters
  public setPosX = (value: number) => (this.posX = value);
  public setPosY = (value: number) => (this.posY = value);
  public setVelX = (value: number) => (this.velX = value);
  public setVelY = (value: number) => (this.velY = value);
  public setWidth = (value: number) => (this.width = value);
  public setHeight = (value: number) => (this.height = value);
  public setCollision = (value: boolean) => (this.collision = value);
  // getters
  public getPos = (): type_Position => {
    return {
      x: [this.posX, this.posX + this.width],
      y: [this.posY, this.posY + this.height],
    };
  };
  public getPosX = (): number => this.posX;
  public getPosY = (): number => this.posY;
  public getVelX = (): number => this.velX;
  public getVelY = (): number => this.velY;
  public getColor = (): string => this.color;
  public getWidth = (): number => this.width;
  public getHeight = (): number => this.height;
  public getCollision = (): boolean => this.collision;
  public getCtx = (): any => this.ctx;

  public addCoordinates() {
    this.ctx.fillText(this.getPos().x.toString(), this.posX, this.posY - 5);
    this.ctx.fillText(this.getPos().y.toString(), this.posX - 50, this.posY);
  }

  public draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
