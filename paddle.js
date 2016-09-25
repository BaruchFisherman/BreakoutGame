class Paddle {
    constructor(context, canvas) {
        this.ctx = context;
        this.canvas = canvas;
        this.height = 10;
        this.width = 75;
        this.x = (canvas.width - this.width) / 2;
        this.color = "blue";
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveRight() {
        this.x += 7;
    }

    moveLeft() {
        this.x -= 7;
    }
}