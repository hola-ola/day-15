class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.width = 40;
        this.height = 40;
        this.floor = 210;
        this.velocity = 0;
        this.jumpCount = 0;
    }

    keyPressed() {
        if(keyCode === 32) {
            this.jump();
        }
    }

    jump() {
        if (this.jumpCount === 2) {
            return; 
        }
        this.jumpCount++; 
        this.y -= 10;
        this.velocity -= 5;  
    }

    draw() {
        this.velocity += GRAVITY;

        this.y += this.velocity;

        if (this.y >= this.floor) {
            this.y = this.floor;
            this.velocity = 0;
            this.jumpCount = 0;
        }

        image(theDude, this.x, this.y, this.width, this.height)
    }
}