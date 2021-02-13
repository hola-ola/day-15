class Obstacle {
    constructor() {
        this.x = WIDTH;
        this.y = random(0, HEIGHT);
        this.width = random(70, 100);
        this.height = random(30, 50);
    }

    draw() {
        this.x -= 3;
        rect(this.x, this.y, this.width, this.height);
    }
}