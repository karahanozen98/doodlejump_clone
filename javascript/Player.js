import GameObject from "./GameObject.js";
import listenKeyboardEvents, { upPressed, leftPressed, rightPressed } from "./KeyboardEventHandler.js";
import { WINDOW_WIDTH, WINDOW_HEIGHT, GRAVITY } from "./app.js";
export default class Player extends GameObject {
    constructor(width, height, posX, posY, color, gameWindow) {
        super(width, height, posX, posY, color, true, gameWindow);
        this.setIsOnTheGround = (value) => {
            this.isOntheGround = value;
        };
        this.speed = 5;
    }
    enableKeyControls() {
        listenKeyboardEvents();
        // add keyboard movements
        if (upPressed) { // jump
            this.setVelY(-GRAVITY * 20);
            this.isOntheGround = false;
        }
        if (leftPressed)
            this.setPosX(this.getPosX() - this.speed); // go left
        if (rightPressed)
            this.setPosX(this.getPosX() + this.speed); // go right
    }
    enableGravity() {
        if (!this.isOntheGround)
            this.setVelY(this.getVelY() + GRAVITY);
    }
    updatePosition() {
        this.enableKeyControls();
        this.enableGravity();
        this.setPosX(this.getPosX() + this.getVelX());
        this.setPosY(this.getPosY() + this.getVelY());
        // add collisions
        if (this.getPosX() > WINDOW_WIDTH)
            this.setPosX(0 - this.getWidth());
        else if (this.getPosX() < -this.getWidth())
            this.setPosX(WINDOW_WIDTH);
        if (this.getPosY() >= WINDOW_HEIGHT - this.getHeight()) {
            this.setPosY(WINDOW_HEIGHT - this.getHeight());
            this.setIsOnTheGround(true);
        }
    }
    draw() {
        this.updatePosition();
        const ctx = this.getCtx();
        ctx.fillStyle = this.getColor();
        ctx.fillRect(this.getPosX(), this.getPosY(), this.getWidth(), this.getHeight());
    }
}
//# sourceMappingURL=Player.js.map