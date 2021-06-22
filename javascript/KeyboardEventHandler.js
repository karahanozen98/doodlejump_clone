export var rightPressed = false;
export var leftPressed = false;
export var upPressed = false;
export var downPressed = false;
function keyDownHandler(event) {
    const code = event.code;
    if (code == "KeyW" || code == "ArrowUp") {
        upPressed = true;
    }
    else if (code == "KeyS" || code == "ArrowDown") {
        downPressed = true;
    }
    else if (code == "KeyA" || code == "ArrowLeft") {
        leftPressed = true;
    }
    else if (code == "KeyD" || code == "ArrowRight") {
        rightPressed = true;
    }
}
function keyUpHandler(event) {
    const code = event.code;
    if (code == "KeyW" || code == "ArrowUp") {
        upPressed = false;
    }
    else if (code == "KeyS" || code == "ArrowDown") {
        downPressed = false;
    }
    else if (code == "KeyA" || code == "ArrowLeft") {
        leftPressed = false;
    }
    else if (code == "KeyD" || code == "ArrowRight") {
        rightPressed = false;
    }
}
export default function listenKeyboardEvents() {
    addEventListener("keydown", keyDownHandler, false);
    addEventListener("keyup", keyUpHandler, false);
}
//# sourceMappingURL=KeyboardEventHandler.js.map