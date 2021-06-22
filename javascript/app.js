import { gameWindow } from "./gameWindow.js";
import GameObject from "./GameObject.js";
import Player from "./Player.js";
export const WINDOW_WIDTH = 750;
export const WINDOW_HEIGHT = 500;
export let GRAVITY = 0.7; // WINDOW_HEIGHT / 1000;
class Game {
    constructor() {
        this.objects = [];
    }
    init() {
        gameWindow.draw(WINDOW_WIDTH, WINDOW_HEIGHT);
        this.player = new Player(20, 40, 50, 0, "#50ff50", gameWindow);
        this.objects.push(this.player);
        this.objects.push(new GameObject(700, 10, 0, 490, "#ddd", true, gameWindow));
        this.objects.push(new GameObject(100, 180, 10, 320, "#ddd", true, gameWindow));
        this.objects.push(new GameObject(30, 180, 300, 320, "#ddd", true, gameWindow));
        this.objects.push(new GameObject(100, 3, 100, 220, "#ddd", true, gameWindow));
        this.objects.push(new GameObject(100, 3, 200, 180, "#ddd", true, gameWindow));
        // this.objects.push(new GameObject(80, 3, 50, 150, "#ddd", true, gameWindow))
        // this.objects.push(new GameObject(80, 3, 50, 300, "#ddd", true, gameWindow))
        // this.objects.push(new GameObject(80, 3, 180, 400, "#ddd", true, gameWindow))
    }
    start() {
        this.init();
        this.render();
    }
    stop() {
        this.objects = [];
    }
    render() {
        setInterval(() => {
            collisionDetection(this.objects);
            gameWindow.context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
            this.objects.forEach((obj) => {
                obj.draw();
            });
        }, 1000 / 60); // 30fps
    }
}
export const game = new Game();
game.start();
function collisionDetection(objects) {
    let player;
    let objs = [...objects];
    // seperate player and game objects
    objs.forEach((obj, index) => {
        if (obj instanceof Player)
            player = objs.splice(index, 1)[0];
    });
    objs.forEach((obj, index) => {
        if (obj.getCollision()) {
            const [obj_x_min, obj_x_max] = [
                Math.min(...obj.getPos().x),
                Math.max(...obj.getPos().x),
            ];
            const [obj_y_min, obj_y_max] = [
                Math.min(...obj.getPos().y),
                Math.max(...obj.getPos().y),
            ];
            const [player_x_min, player_x_max] = [
                Math.min(...player.getPos().x),
                Math.max(...player.getPos().x),
            ];
            const [player_y_min, player_y_max] = [
                Math.min(...player.getPos().y),
                Math.max(...player.getPos().y),
            ];
            const collision_left = player_x_min <= obj_x_max && player_x_max >= obj_x_max;
            const collision_right = player_x_max >= obj_x_min && player_x_min <= obj_x_min;
            const collision_bottom = player_y_max >= obj_y_min && player_y_min <= obj_y_min;
            const collision_top = player_y_min <= obj_y_max && player_y_max > obj_y_max;
            const collision_x = (player_x_min >= obj_x_min && player_x_max <= obj_x_max) ||
                collision_left ||
                collision_right;
            const collision_y = (player_y_min >= obj_y_min && player_y_max <= obj_y_max) ||
                collision_top ||
                collision_bottom;
            if (collision_bottom && collision_x) {
                player.setPosY(obj_y_min - player.getHeight());
                player.setIsOnTheGround(true);
                player.setVelY(0);
            }
            else if (!collision_bottom && collision_x) {
                player.setIsOnTheGround(false);
            }
        }
    });
}
//# sourceMappingURL=app.js.map