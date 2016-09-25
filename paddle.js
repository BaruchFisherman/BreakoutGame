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
        if (this.x < this.canvas.width - this.width) {
            this.x += 7;
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= 7;
        }
    }
}