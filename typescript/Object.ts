export default class Object {
  private width: number;
  private height: number;
  private color: string;
  private posX: number;
  private posY: number;
  private collisions: boolean;
  private ctx: any;

  constructor(
    width: number,
    height: number,
    posX: number,
    posY: number,
    color: string,
    collisions: boolean,
    gameWindow: any
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.collisions = collisions;
    this.ctx = gameWindow.context;
  }

  public setPosX(value: number) {
    this.posX = value;
  }
  public setPosY(value) {
    this.posY = value;
  }
  public setWidth(value) {
    this.width = value;
  }
  public setHeight(value) {
    this.height = value;
  }

  public getPosX(): number {
    return this.posX;
  }
  public getPosY(): number {
    return this.posY;
  }
  public getColor(): string {
    return this.color;
  }
  public getWidth(): number {
    return this.width;
  }
  public getHeight(): number {
    return this.height;
  }
  public getCtx(): any {
    return this.ctx;
  }

  public draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
