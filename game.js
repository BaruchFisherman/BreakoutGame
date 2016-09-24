let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: 2,
    dy: -2,
    radius: 10,
    color: "red"
}


let paddle = {
    height: 10,
    width: 75,
    get x() {
        return (canvas.width - this.width) / 2;
    },
    color: "blue",
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}


function setBallPosition() {
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx *= -1;
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy *= -1;
    }

    ball.x += ball.dx;
    ball.y += ball.dy;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    paddle.draw();
    setBallPosition();

    requestAnimationFrame(draw);
}

draw();
//setInterval(draw, 10);