import GameObject from "./GameObject.js";
import { gameWindow } from "./gameWindow.js";
import { WINDOW_WIDTH } from "./app.js";
export default class Step extends GameObject {
    constructor(x, y) {
        super(100, 4, x, y, "#ddd", true, gameWindow);
        this.minWidth = 50;
        this.isPlayerOnThis = false;
    }
    // public get isPlayerOnThis() : string {
    //   return 
    // }
    randomize() {
        this.setPosY(0);
        this.setWidth(Math.random() * this.minWidth + 50);
        this.setPosX(Math.random() * (WINDOW_WIDTH - 100));
    }
}
//# sourceMappingURL=Step.js.map