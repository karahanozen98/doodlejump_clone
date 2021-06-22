import Player from "./Player.js";
export function collisionDetection(objects) {
    let player;
    let objs = [...objects];
    let collisionDetected = false;
    // seperate player and game objects
    objs.forEach((obj, index) => {
        if (obj instanceof Player)
            player = objs.splice(index, 1)[0];
    });
    objs.forEach((obj) => {
        if (obj.getCollision()) {
            const [obj_x_min, obj_x_max] = obj.getPos().x;
            const [obj_y_min, obj_y_max] = obj.getPos().y;
            const [player_x_min, player_x_max] = player.getPos().x;
            const [player_y_min, player_y_max] = player.getPos().y;
            if (((player_x_min <= obj_x_min && player_x_max >= obj_x_min) ||
                (player_x_min <= obj_x_max && player_x_max >= obj_x_max) ||
                (player_x_min >= obj_x_min && player_x_max <= obj_x_max)) &&
                player_y_max >= obj_y_min &&
                player_y_max < obj_y_min + 10 &&
                player.getVelY() > 0) {
                player.setPosY(obj_y_min - player.getHeight());
                player.setIsOnTheGround(true);
                player.setVelY(0);
                collisionDetected = true;
                return;
            }
        }
    });
    if (!collisionDetected)
        player.setIsOnTheGround(false);
}
//# sourceMappingURL=CollisionDetection.js.map