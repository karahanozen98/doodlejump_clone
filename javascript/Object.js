// game object base class
export default class GameObject {
    constructor(width, height, posX, posY, color, collisions, gameWindow) {
        // setters
        this.setPosX = (value) => this.posX = value;
        this.setPosY = (value) => this.posY = value;
        this.setVelX = (value) => this.velX = value;
        this.setVelY = (value) => this.velY = value;
        this.setWidth = (value) => this.width = value;
        this.setHeight = (value) => this.height = value;
        this.setCollision = (value) => this.collision = value;
        // getters
        this.getPosX = () => this.posX;
        this.getPosY = () => this.posY;
        this.getPos = () => { return { x: [this.posX, this.posX + this.width], y: [this.posY, this.posY + this.height] }; };
        this.getVelX = () => this.velX;
        this.getVelY = () => this.velY;
        this.getColor = () => this.color;
        this.getWidth = () => this.width;
        this.getHeight = () => this.height;
        this.getCollision = () => this.collision;
        this.getCtx = () => this.ctx;
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
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}
//# sourceMappingURL=Object.js.map