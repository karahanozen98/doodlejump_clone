import { gameWindow } from "./gameWindow.js";
import Player from "./Player.js";
import Step from "./Step.js";
import { collisionDetection } from "./CollisionDetection.js";
export const WINDOW_WIDTH = 350;
export const WINDOW_HEIGHT = 500;
export let GRAVITY = WINDOW_HEIGHT / 1500;
class Game {
    constructor() {
        this.interval = null;
        this.objects = [];
        gameWindow.draw(WINDOW_WIDTH, WINDOW_HEIGHT);
        this.ctx = gameWindow.context;
    }
    init() {
        this.score = 0;
        this.gameSpeed = 1.5;
        this.player = new Player(20, 50, 150, 10, "#50ff50", gameWindow);
        this.objects.push(this.player);
        this.objects.push(new Step(100, WINDOW_HEIGHT * (1 / 3)));
        this.objects.push(new Step(100, WINDOW_HEIGHT * (2 / 3)));
        this.objects.push(new Step(100, WINDOW_HEIGHT * (3 / 3)));
    }
    moveObjectsDown() {
        this.objects.forEach((obj) => {
            // if object is a step move object down
            if (!(obj instanceof Player))
                obj.setPosY(obj.getPosY() + this.gameSpeed);
            // if player is on a step (not jumping). Move player down
            if (this.player.getIsOnTheGround())
                this.player.setPosY(this.player.getPosY() - 0.7 + this.gameSpeed);
            // if object is out of window randomize object and rerender on window
            if (obj.getPosY() > WINDOW_HEIGHT) {
                obj.randomize();
                this.increasescore();
            }
        });
    }
    increasescore() {
        this.score++;
        if (this.score >= 50)
            this.gameSpeed = 2.55;
        else if (this.score >= 40)
            this.gameSpeed = 2.35;
        else if (this.score >= 30)
            this.gameSpeed = 2.2;
        else if (this.score >= 20)
            this.gameSpeed = 2;
        else if (this.score >= 10)
            this.gameSpeed = 1.8;
    }
    runGame() {
        collisionDetection(this.objects); // add collision detection
        gameWindow.context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT); // clear window before rerender
        this.objects.forEach((obj) => obj.draw()); // draw all objects assigned to game
        this.moveObjectsDown(); // move all steps downwards
        this.ctx.font = "15px Arial";
        this.ctx.fillText("Score: " + this.score.toString(), WINDOW_WIDTH / 2 - 30, 20);
    }
    start() {
        this.init();
        this.render();
    }
    stop() {
        clearInterval(this.interval);
        this.ctx.fillText("Start New Game", WINDOW_WIDTH / 2 - 30, 20);
    }
    render() {
        this.interval = setInterval(() => {
            this.runGame();
        }, 1000 / 60); // 30fps
    }
}
export const game = new Game();
game.start();
//# sourceMappingURL=app.js.map