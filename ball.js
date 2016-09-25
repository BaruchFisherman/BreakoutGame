class Ball {

    constructor(context, canvas) {
        this.canvas = canvas;
        this.ctx = context;
        this.x = canvas.width / 2;
        this.y = canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.radius = 10;
        this.color = "red";
    }

    drow() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    setPosition() {
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            ball.dx *= -1;
        }
        if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy *= -1;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}