var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bricks = [];
for (var c = 0; c < brickConfig.columnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickConfig.rowCount; r++) {
        bricks[c][r] = Object.create(brickPrototype);
    }
}

console.log(bricks);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    collisionDetection();
    ball.drow();
    paddle.draw();
    moveBall();


    if (keyHandler.rightPressed) {
        paddle.moveRight();
    }
    else if (keyHandler.leftPressed) {
        paddle.moveLeft();
    }

    requestAnimationFrame(draw);
}

function drawBricks() {
    for (var c = 0; c < brickConfig.columnCount; c++) {
        for (r = 0; r < brickConfig.rowCount; r++) {
            var brickX = (c * (brickConfig.width + brickConfig.padding)) + brickConfig.offsetLeft;
            var brickY = (r * (brickConfig.height + brickConfig.padding)) + brickConfig.offsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickConfig.width, brickConfig.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function moveBall() {
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx *= -1;
    }

    if (ball.y + ball.dy < ball.radius) {
        ball.dy *= -1;
    }
    else if (ball.y + ball.dy + paddle.height / 2 > ball.canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            ball.dy *= -1;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }

    ball.x += ball.dx;
    ball.y += ball.dy;
}

function collisionDetection() {
    for (let c = 0; c < brickConfig.columnCount; c++) {
        for (let r = 0; r < brickConfig.rowCount; r++) {
            let brick = bricks[c][r];
            if(isCollide(brick, ball)){
                ball.dy *= -1;
            }
            // if (ball.x > brick.x && ball.x < brick.x + brickConfig.width &&
            //     ball.y > brick.y && ball.y < brick.y + brickConfig.height) {
            //     ball.dy *= -1;
            // }
        }
    }
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}

let keyHandler = new KeyHandler();
let ball = new Ball(ctx, canvas);
let paddle = new Paddle(ctx, canvas);
draw();