var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// class KeyHandler {
//     constructor() {
//         this.rightPressed = false;
//         this.leftPressed = false;

//         document.addEventListener("keydown", this.keyDownHandler, false);
//         document.addEventListener("keyup", this.keyUpHandler, false);
//     }

//     keyDownHandler(e) {
//         if (e.keyCode == 39) {
//             console.log('keyDownHandler.rightPressed');
//             //console.log("-----keyUpHandler-----")
//             this.rightPressed = true;
//         }
//         else if (e.keyCode == 37) {
//             //console.log("-----keyUpHandler-----")
//             this.leftPressed = true;
//         }
//     }
//     keyUpHandler(e) {
//         if (e.keyCode == 39) {
//             //console.log("-----keyUpHandler-----");
//             this.rightPressed = false;
//         }
//         else if (e.keyCode == 37) {
//             //console.log("-----keyUpHandler-----");
//             this.leftPressed = false;
//         }
//     }
// }
var ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: 2,
    dy: -2,
    radius: 10,
    color: "red",
    drow() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
    setPosition() {
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            ball.dx *= -1;
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}


var paddle = {
    height: 10,
    width: 75,
    get x() {
        return (canvas.width - this.width) / 2;
    },
    set x(value) {
        this.x = value;
    },
    color: "blue",
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
    moveRight() {
        paddle.x += 7;
    },
    moveLeft() {
        paddle.x -= 7;
    }
}


function draw() {
keyHandler.leftPressed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drow();
    paddle.draw();
    ball.setPosition();

    // if (keyHandler.rightPressed) {
    //     paddle.moveRight();
    // }
    // else if (keyHandler.leftPressed) {
    //     paddle.moveLeft();
    // }

    requestAnimationFrame(draw);
}

// var keyHandler = new KeyHandler();
draw();