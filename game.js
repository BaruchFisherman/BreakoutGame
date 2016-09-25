var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drow();
    paddle.draw();
    ball.setPosition();

    if (keyHandler.rightPressed) {
        paddle.moveRight();
    }
    else if (keyHandler.leftPressed) {
        paddle.moveLeft();
    }

    requestAnimationFrame(draw);
}

let keyHandler = new KeyHandler();
let ball = new Ball(ctx, canvas);
let paddle = new Paddle(ctx, canvas);
draw();